# Atelier Noble Ink — Sito Web

Landing page one-page per lo studio di tatuaggi Atelier Noble Ink, basata sulla brand guide fornita (logo, palette colori, tipografia Times New Roman, tono di voce). Stack: React + Tailwind CSS + Framer Motion (animazioni). Font self-hosted: Cormorant Garamond (titoli) e Lora (testo), nessun Google Fonts esterno.

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
- Email e numero WhatsApp: `src/config.js`

## Sito pronto da caricare

In `rilasci/atelier-noble-ink-sito.zip` c'è sempre l'ultima versione già compilata (istruzioni in `rilasci/LEGGIMI.txt`). Dopo aver estratto lo zip si può aprire anche con doppio clic su `index.html`. Si rigenera con `npm run build` e zippando il contenuto di `dist/`.

## Contenuti di esempio

Team (Valerio Bruni, Chiara Morandi, Matteo Vieri), stili, recensioni e foto sono **segnaposto** per la presentazione. Si sostituiscono in `src/i18n/extras.js` (testi nelle 4 lingue) e nelle cartelle `public/team`, `public/gallery`.

## Form contatti (WhatsApp)

Il form non usa server né PHP: compone il messaggio (nome, email facoltativa, descrizione) e apre WhatsApp già compilato; il visitatore preme "Invia". Funziona su qualsiasi hosting statico.
- Il numero WhatsApp **non compare in chiaro** nel codice né nella pagina (in `src/config.js` è codificato in pezzi e ricostruito solo al click, per ridurre lo spam dei bot). Nella pagina si vede mascherato (`+34 ••• ••• •••`).
- Per cambiare numero: in `src/config.js` sostituisci `PHONE_PARTS` (istruzioni nel commento del file).
- L'email dello studio resta visibile come contatto (`STUDIO_EMAIL`).

## Film d'atelier

Carica `public/video/atelier-film.mp4` per attivare il video. Finché non esiste, il sito mostra un segnaposto.

## WhatsApp

Messaggi precompilati: `contact.waMessage` in `src/i18n/extras.js`.

## Immagini di esempio

Le foto di stili (`public/gallery/`) e cura del tatuaggio (`public/aftercare/`) sono generate con l'IA (Gemini) senza volti: sono segnaposto da sostituire con foto reali del lavoro dello studio.

## Testi della cura del tatuaggio

Verificati su fonti dermatologiche (Cleveland Clinic, Healthline), sul produttore delle pellicole trasparenti (Saniderm) e su siti di studi di tatuaggio. Punti chiave: la pellicola trasparente resta in genere 2–4 giorni, desquamazione e crosticine possono comparire ma non sempre, niente immersioni per 2–4 settimane, crema solare solo a tatuaggio guarito. Sono nel file `src/i18n/extras.js` (chiave `aftercare`).
