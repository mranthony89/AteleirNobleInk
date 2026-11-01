# Atelier Noble Ink — Sito Web

Landing page one-page per lo studio di tatuaggi Atelier Noble Ink, basata sulla brand guide fornita (logo, palette colori, tipografia Times New Roman, tono di voce). Stack: React + Tailwind CSS + Framer Motion (animazioni).

## Sviluppo

```bash
npm install
npm run dev
```

## Build per hosting condiviso

```bash
npm run build
```

Il comando genera la cartella `dist/`. Basta caricare **il contenuto** di `dist/` (non la cartella stessa) nella root pubblica dell'hosting condiviso (es. `public_html/`). Il sito è composto solo da file statici (HTML/CSS/JS), quindi funziona su qualsiasi hosting condiviso senza bisogno di Node.js sul server.

## Personalizzazione

- Colori e font: `tailwind.config.js`
- Testi e sezioni: componenti in `src/components/`
- Logo: `src/components/Logo.jsx` (SVG) e `public/favicon.svg`
- Email, telefono e WhatsApp: `src/config.js`

## Contenuti di esempio

Team (Valerio Bruni, Chiara Morandi, Matteo Vieri), stili, recensioni e foto sono **segnaposto** per la presentazione. Si sostituiscono in `src/i18n/extras.js` (testi nelle 4 lingue) e nelle cartelle `public/team`, `public/gallery`.

## Form contatti (PHP)

Il form invia a `api/contact.php` (cartella `public/api/`, copiata in `dist/api/`). Serve un hosting con PHP.
- Destinatario e mittente: `api/config.php` (protetto da `.htaccess`, non scaricabile dal browser).
- Protezioni incluse: honeypot, limite di invii per IP, controllo dell'origine.
- In sviluppo (`npm run dev`) PHP non c'è: il form mostra l'errore con il link di ripiego via email.

## Film d'atelier

Carica `public/video/atelier-film.mp4` per attivare il video. Finché non esiste, il sito mostra un segnaposto.

## WhatsApp

Numero e messaggi precompilati: `src/config.js` e `contact.waMessage` in `src/i18n/extras.js`.
