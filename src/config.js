// Dati di contatto dello studio
export const STUDIO_EMAIL = 'info@ateliernobleink.com'

// Il numero WhatsApp NON compare in chiaro nel codice né come testo nella pagina: è salvato in pezzi
// codificati, ricostruito solo quando serve e mostrato come immagine vettoriale (PhoneImage.jsx).
// Per cambiarlo: btoa('34XXXXXXXXX') nella console del browser e incolla il risultato spezzato in 4 parti.
const PHONE_PARTS = ['MzQ2', 'NDI1', 'NTgz', 'Mzk=']
const phoneDigits = () => atob(PHONE_PARTS.join(''))

// Numero formattato per la visualizzazione: viene disegnato come immagine (vedi PhoneImage.jsx),
// quindi non esiste come testo nella pagina.
export const getPhoneDisplay = () => {
  const d = phoneDigits()
  return `+${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5, 8)} ${d.slice(8)}`
}

// Film d'atelier: sostituisci il file in public/video/ per usare il video reale
export const FILM_SRC = './video/atelier-film.mp4'
export const FILM_POSTER = './gallery/gallery-4.jpg'

// Apre WhatsApp (app o web) con il messaggio già scritto
export function openWhatsApp(message = '') {
  const url = `https://wa.me/${phoneDigits()}${message ? `?text=${encodeURIComponent(message)}` : ''}`
  const win = window.open(url, '_blank', 'noopener')
  if (!win) window.location.href = url // popup bloccato: apri nella stessa scheda
}
