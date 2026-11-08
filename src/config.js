// Dati di contatto dello studio
export const STUDIO_EMAIL = 'info@ateliernobleink.com'

// Il numero WhatsApp NON compare in chiaro nel codice né nella pagina: è salvato in pezzi codificati
// e ricostruito solo quando l'utente clicca un pulsante WhatsApp (difficile da leggere per i bot di spam).
// Per cambiarlo: btoa('34XXXXXXXXX') nella console del browser e incolla il risultato spezzato in 4 parti.
const PHONE_PARTS = ['MzQ2', 'NDI1', 'NTgz', 'Mzk=']
const phoneDigits = () => atob(PHONE_PARTS.join(''))

// Mostrato nella pagina con le cifre nascoste
export const STUDIO_PHONE_MASKED = '+34 \u2022\u2022\u2022 \u2022\u2022\u2022 \u2022\u2022\u2022'

// Film d'atelier: sostituisci il file in public/video/ per usare il video reale
export const FILM_SRC = './video/atelier-film.mp4'
export const FILM_POSTER = './gallery/gallery-4.jpg'

// Apre WhatsApp (app o web) con il messaggio già scritto
export function openWhatsApp(message = '') {
  const url = `https://wa.me/${phoneDigits()}${message ? `?text=${encodeURIComponent(message)}` : ''}`
  const win = window.open(url, '_blank', 'noopener')
  if (!win) window.location.href = url // popup bloccato: apri nella stessa scheda
}
