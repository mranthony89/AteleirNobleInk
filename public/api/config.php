<?php
// Configurazione del form contatti.
// Questo file NON è raggiungibile dal browser (vedi .htaccess) e, anche se lo fosse,
// non stampa nulla: restituisce solo un array usato da contact.php.
//
// Modifica i valori qui sotto direttamente sul server dopo aver caricato il sito.

if (!defined('NOBLE_INK_CONTACT')) {
    http_response_code(403);
    exit;
}

return [
    // Casella che riceve le richieste di consulenza
    'to'        => 'info@ateliernobleink.com',

    // Mittente tecnico: usa un indirizzo del TUO dominio (evita lo spam folder)
    'from'      => 'noreply@ateliernobleink.com',
    'from_name' => 'Atelier Noble Ink - Sito web',

    // Prefisso dell'oggetto dell'email
    'subject_prefix' => '[Atelier Noble Ink] Nuova richiesta di consulenza',

    // Anti-spam: massimo di invii per indirizzo IP in 1 ora
    'max_per_hour' => 5,

    // Domini autorizzati a inviare il form (vuoto = stesso dominio del sito).
    // Esempio: ['ateliernobleink.com', 'www.ateliernobleink.com']
    'allowed_hosts' => [],
];
