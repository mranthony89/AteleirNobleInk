<?php
// Riceve il form contatti (JSON o form-data) e invia l'email allo studio.
// Risponde sempre in JSON: {"ok":true} oppure {"ok":false,"error":"codice"}.

declare(strict_types=1);

define('NOBLE_INK_CONTACT', true);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$config = require __DIR__ . '/config.php';

// Controllo origine: la richiesta deve arrivare dal nostro stesso sito
$host    = strtolower(preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? '')));
$allowed = array_map('strtolower', $config['allowed_hosts'] ?: [$host]);
$origin  = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
if ($origin !== '') {
    $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
    if ($originHost === '' || !in_array($originHost, $allowed, true)) {
        respond(403, ['ok' => false, 'error' => 'forbidden_origin']);
    }
}

// Lettura dati (JSON dal sito, oppure form classico)
$raw  = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: un utente reale non compila questo campo. Fingiamo successo per non aiutare i bot.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

function clean(mixed $value, int $max, bool $multiline = false): string
{
    $value = is_string($value) ? trim($value) : '';
    // rimuove caratteri di controllo (e a capo se il campo finisce in un header email)
    $value = preg_replace($multiline ? '/[^\P{C}\n]+/u' : '/[^\P{C}]+/u', '', $value) ?? '';
    return mb_substr($value, 0, $max);
}

$name    = clean($data['name'] ?? '', 100);
$email   = clean($data['email'] ?? '', 150);
$phone   = clean($data['phone'] ?? '', 40);
$message = clean($data['message'] ?? '', 4000, true);
$lang    = in_array($data['lang'] ?? '', ['it', 'es', 'en', 'de'], true) ? $data['lang'] : 'it';

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'invalid_input']);
}

// Limite di invii per IP (file temporaneo, nessun database necessario)
$ip       = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = __DIR__ . '/.rate_' . hash('sha256', $ip);
$now      = time();
$hits     = [];
if (is_file($rateFile)) {
    $hits = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($rateFile))),
        fn (int $t) => $t > $now - 3600
    );
}
if (count($hits) >= (int) $config['max_per_hour']) {
    respond(429, ['ok' => false, 'error' => 'too_many_requests']);
}

// Composizione email
$subject = $config['subject_prefix'] . ' - ' . $name;
$body    = "Nuova richiesta dal sito Atelier Noble Ink\n"
         . "-------------------------------------------\n"
         . "Nome:      $name\n"
         . "Email:     $email\n"
         . "Telefono:  " . ($phone !== '' ? $phone : '-') . "\n"
         . "Lingua:    $lang\n\n"
         . "Messaggio:\n$message\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$fromName       = '=?UTF-8?B?' . base64_encode($config['from_name']) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    "From: $fromName <{$config['from']}>",
    "Reply-To: $email",
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail($config['to'], $encodedSubject, $body, implode("\r\n", $headers), '-f' . $config['from']);

if (!$sent) {
    error_log('[noble-ink] invio email fallito');
    respond(500, ['ok' => false, 'error' => 'mail_failed']);
}

$hits[] = $now;
@file_put_contents($rateFile, implode(',', $hits), LOCK_EX);

respond(200, ['ok' => true]);
