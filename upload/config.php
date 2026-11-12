<?php
// Impostazioni della pagina di caricamento file.
// Questo file non e' raggiungibile dal browser (vedi .htaccess) e non stampa nulla se aperto direttamente.

if (!defined('ATELIER_UPLOAD')) {
    http_response_code(403);
    exit;
}

return [
    // Cartella dove finiscono i file caricati (relativa a questa cartella). Verra' creata da sola.
    'upload_dir' => 'uploads',

    // Dimensione massima di un singolo file, in MB (10240 = 10 GB)
    'max_file_mb' => 10240,

    // Dimensione massima di ogni "pezzo" inviato, in MB. Il sistema la riduce da solo
    // se il server accetta meno (limiti PHP / hosting).
    'chunk_max_mb' => 8,

    // Spazio libero minimo da lasciare sul server, in MB
    'min_free_mb' => 200,

    // Giorni dopo i quali i caricamenti rimasti a meta' vengono eliminati
    'keep_parts_days' => 7,

    // Formati accettati (estensioni, minuscole). Gli script e i file eseguibili sono esclusi di proposito.
    'allowed_ext' => [
        // foto
        'jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'heic', 'heif', 'tif', 'tiff', 'bmp',
        'dng', 'raw', 'arw', 'cr2', 'cr3', 'nef', 'orf', 'rw2', 'raf',
        // video
        'mp4', 'mov', 'm4v', 'avi', 'mkv', 'webm', '3gp', '3g2', 'mts', 'm2ts', 'mpg', 'mpeg', 'wmv', 'flv', 'mxf',
        // audio
        'm4a', 'mp3', 'wav', 'aac',
        // grafica e documenti
        'pdf', 'ai', 'eps', 'psd', 'zip',
    ],
];
