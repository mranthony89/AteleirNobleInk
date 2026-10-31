# Atelier Noble Ink — Sito Web

Landing page one-page per lo studio di tatuaggi Atelier Noble Ink, basata sulla brand guide fornita (logo, palette colori, tipografia Times New Roman, tono di voce).

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
- Email di destinazione del form contatti: `src/components/Contact.jsx` (`STUDIO_EMAIL`)
