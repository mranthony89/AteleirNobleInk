// Dati di contatto dello studio (usati da form, footer, WhatsApp)
export const STUDIO_EMAIL = 'info@ateliernobleink.com'
export const STUDIO_PHONE_DISPLAY = '+34 642 558 339'
export const STUDIO_PHONE_DIGITS = '34642558339'

// Endpoint PHP del form (relativo alla pagina: funziona anche in sottocartelle)
export const CONTACT_ENDPOINT = './api/contact.php'

// Film d'atelier: sostituisci il file in public/video/ per usare il video reale
export const FILM_SRC = './video/atelier-film.mp4'
export const FILM_POSTER = './gallery/gallery-4.jpg'

export const whatsappUrl = (message = '') =>
  `https://wa.me/${STUDIO_PHONE_DIGITS}${message ? `?text=${encodeURIComponent(message)}` : ''}`
