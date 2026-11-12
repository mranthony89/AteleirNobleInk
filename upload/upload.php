<?php
// Riceve i file caricati dalla pagina index.html, a pezzi (chunk), con ripresa automatica.
// Risponde sempre in JSON. Compatibile con PHP 7.4 e successivi.

declare(strict_types=1);

define('ATELIER_UPLOAD', true);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex, nofollow');

function out(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function to_bytes(string $v): int
{
    $v = trim($v);
    if ($v === '' || $v === '-1') {
        return 0; // nessun limite dichiarato
    }
    $n = (int) $v;
    switch (strtolower(substr($v, -1))) {
        case 'g': $n *= 1024;
        // no break
        case 'm': $n *= 1024;
        // no break
        case 'k': $n *= 1024;
    }
    return $n;
}

function str_len(string $s): int
{
    return function_exists('mb_strlen') ? mb_strlen($s) : strlen($s);
}

function str_cut(string $s, int $n): string
{
    return function_exists('mb_substr') ? mb_substr($s, 0, $n) : substr($s, 0, $n);
}

// Pulisce il nome: niente percorsi, niente caratteri strani, niente doppie estensioni
// (es. "a.php.jpg"), e accetta solo le estensioni consentite. Restituisce null se non valido.
function clean_name($name, array $allowed): ?string
{
    $name = str_replace('\\', '/', (string) $name);
    $name = basename($name);
    $name = preg_replace('/[\x00-\x1F\x7F]/u', '', $name);
    if ($name === null) {
        return null; // codifica non valida
    }
    $name = preg_replace('/[<>:"\/\\\\|?*#%&{}$!\'`@^~;=+]/u', '_', $name) ?? '';
    $name = preg_replace('/\s+/u', ' ', $name) ?? '';
    $name = trim($name, '. ');
    $ext = strtolower((string) pathinfo($name, PATHINFO_EXTENSION));
    if ($name === '' || $ext === '' || !in_array($ext, $allowed, true)) {
        return null;
    }
    $base = (string) pathinfo($name, PATHINFO_FILENAME);
    $base = str_replace('.', '_', $base);
    $base = trim($base);
    if ($base === '') {
        $base = 'file';
    }
    if (str_len($base) > 150) {
        $base = str_cut($base, 150);
    }
    return $base . '.' . $ext;
}

// Elenco (minuscolo) dei file gia' presenti, per riconoscere i duplicati senza badare alle maiuscole
function existing_lower(string $dir): array
{
    $set = [];
    $list = @scandir($dir);
    if (is_array($list)) {
        foreach ($list as $f) {
            if ($f !== '.' && $f !== '..' && $f[0] !== '.') {
                $set[strtolower($f)] = true;
            }
        }
    }
    return $set;
}

function unique_name(string $dir, string $name): string
{
    $set = existing_lower($dir);
    if (!isset($set[strtolower($name)])) {
        return $name;
    }
    $base = (string) pathinfo($name, PATHINFO_FILENAME);
    $ext = (string) pathinfo($name, PATHINFO_EXTENSION);
    for ($i = 2; $i < 10000; $i++) {
        $try = $base . ' (' . $i . ').' . $ext;
        if (!isset($set[strtolower($try)])) {
            return $try;
        }
    }
    return $base . '_' . uniqid() . '.' . $ext;
}

$cfg = require __DIR__ . '/config.php';
$allowed = array_map('strtolower', $cfg['allowed_ext']);
$maxFile = (int) $cfg['max_file_mb'] * 1024 * 1024;

// Cartella di destinazione + cartella temporanea per i pezzi
$dir = __DIR__ . '/' . trim((string) $cfg['upload_dir'], '/\\');
$partsDir = $dir . '/.parts';
if (!is_dir($partsDir) && !@mkdir($partsDir, 0755, true) && !is_dir($partsDir)) {
    out(500, ['ok' => false, 'error' => 'io']);
}
// Protezioni della cartella (le crea una volta sola)
if (!is_file($dir . '/.htaccess')) {
    @file_put_contents(
        $dir . '/.htaccess',
        "Options -Indexes\n"
        . "<IfModule mod_php.c>\n  php_flag engine off\n</IfModule>\n"
        . "<FilesMatch \"\\.(php[0-9]?|phtml|phar|pl|py|cgi|sh|part)$\">\n"
        . "  <IfModule mod_authz_core.c>\n    Require all denied\n  </IfModule>\n"
        . "  <IfModule !mod_authz_core.c>\n    Order allow,deny\n    Deny from all\n  </IfModule>\n"
        . "</FilesMatch>\n"
    );
}
if (!is_file($dir . '/index.html')) {
    @file_put_contents($dir . '/index.html', '');
}

$action = (string) ($_GET['action'] ?? '');

// ---- configurazione: dice alla pagina quanto grande puo' essere ogni pezzo ----------------
if ($action === 'config') {
    $postMax = to_bytes((string) ini_get('post_max_size'));
    $chunk = (int) $cfg['chunk_max_mb'] * 1024 * 1024;
    if ($postMax > 0) {
        $chunk = min($chunk, (int) ($postMax * 0.8));
    }
    $chunk = max(256 * 1024, $chunk);
    // pulizia dei caricamenti rimasti a meta' da troppo tempo
    $limit = time() - ((int) $cfg['keep_parts_days']) * 86400;
    foreach ((array) @glob($partsDir . '/*.part') as $p) {
        if (is_file($p) && filemtime($p) < $limit) {
            @unlink($p);
        }
    }
    out(200, ['ok' => true, 'chunk' => $chunk, 'maxFile' => $maxFile, 'allowed' => $allowed]);
}

// ---- controllo preventivo: formato valido? nome gia' presente? ----------------------------
if ($action === 'check') {
    $body = json_decode((string) file_get_contents('php://input'), true);
    $names = is_array($body['names'] ?? null) ? array_slice($body['names'], 0, 5000) : [];
    $have = existing_lower($dir);
    $res = [];
    foreach ($names as $n) {
        $c = clean_name($n, $allowed);
        if ($c === null) {
            $res[] = 'bad';
        } elseif (isset($have[strtolower($c)])) {
            $res[] = 'dup';
        } else {
            $res[] = 'ok';
        }
    }
    out(200, ['ok' => true, 'results' => $res]);
}

// ---- da qui in poi servono id e nome validi -----------------------------------------------
$id = (string) ($_GET['id'] ?? '');
if (!preg_match('/^[A-Za-z0-9_-]{8,64}$/', $id)) {
    out(400, ['ok' => false, 'error' => 'bad_id']);
}
$name = clean_name($_GET['name'] ?? '', $allowed);
if ($name === null) {
    out(400, ['ok' => false, 'error' => 'bad_ext']);
}
$part = $partsDir . '/' . $id . '.part';
clearstatcache(true, $part);

// ---- offset: da dove riprendere un caricamento interrotto ---------------------------------
if ($action === 'offset') {
    $size = (int) ($_GET['size'] ?? 0);
    $cur = is_file($part) ? (int) filesize($part) : 0;
    if ($cur > $size) {
        @unlink($part);
        $cur = 0;
    }
    out(200, ['ok' => true, 'offset' => $cur]);
}

// ---- chunk: riceve un pezzo del file ------------------------------------------------------
if ($action === 'chunk' && ($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $total = (int) ($_GET['total'] ?? 0);
    $offset = (int) ($_GET['offset'] ?? 0);
    $mode = (($_GET['mode'] ?? '') === 'rename') ? 'rename' : 'skip';

    if ($total <= 0) {
        out(400, ['ok' => false, 'error' => 'empty']);
    }
    if ($total > $maxFile) {
        out(400, ['ok' => false, 'error' => 'too_big']);
    }
    $postMax = to_bytes((string) ini_get('post_max_size'));
    $len = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
    if ($postMax > 0 && $len > $postMax) {
        out(413, ['ok' => false, 'error' => 'chunk_too_big']);
    }

    $cur = is_file($part) ? (int) filesize($part) : 0;
    if ($offset === 0 && $cur > 0) {
        @unlink($part); // ricomincia da capo
        $cur = 0;
    }
    if ($offset !== $cur) {
        out(409, ['ok' => false, 'error' => 'offset_mismatch', 'received' => $cur]);
    }

    // spazio libero sul server
    $free = @disk_free_space($dir);
    if ($free !== false && $free < ($total - $cur) + ((int) $cfg['min_free_mb']) * 1024 * 1024) {
        out(507, ['ok' => false, 'error' => 'no_space']);
    }

    $in = fopen('php://input', 'rb');
    $fh = fopen($part, 'ab');
    if ($in === false || $fh === false) {
        out(500, ['ok' => false, 'error' => 'io']);
    }
    flock($fh, LOCK_EX);
    $written = stream_copy_to_stream($in, $fh);
    fflush($fh);
    flock($fh, LOCK_UN);
    fclose($fh);
    fclose($in);
    clearstatcache(true, $part);
    $size = (int) filesize($part);

    if ($written === false || ($written === 0 && $size < $total)) {
        out(400, ['ok' => false, 'error' => 'empty_chunk']);
    }
    if ($size > $total) {
        @unlink($part);
        out(400, ['ok' => false, 'error' => 'size_mismatch']);
    }
    if ($size < $total) {
        out(200, ['ok' => true, 'done' => false, 'received' => $size]);
    }

    // file completo: lo sposto nella cartella finale
    $have = existing_lower($dir);
    if (isset($have[strtolower($name)])) {
        if ($mode === 'skip') {
            @unlink($part);
            out(409, ['ok' => false, 'error' => 'duplicate']);
        }
        $name = unique_name($dir, $name);
    }
    if (!@rename($part, $dir . '/' . $name)) {
        if (!@copy($part, $dir . '/' . $name)) {
            out(500, ['ok' => false, 'error' => 'io']);
        }
        @unlink($part);
    }
    @chmod($dir . '/' . $name, 0644);
    out(200, ['ok' => true, 'done' => true, 'received' => $size, 'finalName' => $name]);
}

out(400, ['ok' => false, 'error' => 'bad_request']);
