// Testi di base. Team, cura del tatuaggio, stili, rituale e recensioni stanno in extras.js
import { extras } from './extras.js'

export const languages = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

const baseTranslations = {
  it: {
    nav: { about: 'Chi Siamo', team: 'Team', gallery: 'Galleria', aftercare: 'Cura Tatuaggio', contact: 'Contatti', book: 'Prenota' },
    welcome: {
      hello: 'Benvenuti',
      choose: 'Scegli la tua lingua',
      enter: 'Entra',
    },
    hero: {
      studio: 'Tattoo Studio',
      quote: '"Ogni tatuaggio racconta una storia senza tempo."',
      cta1: 'Prenota una Consulenza',
      cta2: 'Scopri la Cura del Tatuaggio',
    },
    about: {
      eyebrow: 'Chi Siamo',
      title: 'Più di uno studio di tatuaggi',
      p1: "Atelier Noble Ink è un luogo dove l'arte si incontra con la pelle, la storia si incontra con l'identità e ogni tatuaggio si trasforma in un'opera senza tempo.",
    },
    gallery: {
      eyebrow: 'Galleria',
      title: 'Opere Selezionate',
      subtitle: 'Immagini autentiche, dettagli di materiali, atmosfera sofisticata — colori desaturati, tonalità calde e naturali.',
      footnote: 'Portfolio completo disponibile su richiesta in studio e sui nostri canali social.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamentale', 'Realistico', 'Botanico', 'Geometrico'],
    },
    contact: {
      eyebrow: 'Prenotazioni',
      title: 'Prenota la tua Consulenza',
      subtitle: 'Raccontaci la tua idea: ti risponderemo per fissare un appuntamento in studio.',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefono',
      message: 'Descrivi la tua idea',
      submit: 'Invia Richiesta',
      sent: "Il tuo client email si sta aprendo per completare l'invio. A presto in atelier.",
      addressLabel: 'Indirizzo',
      address: 'Calle Los Emigrantes 4, San Isidro de Abona, Tenerife',
      directions: 'Come raggiungerci',
      hoursLabel: 'Orari',
      hours: 'Tutti i giorni, 10:00–18:00',
      contactLabel: 'Contatti',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
    },
  },

  es: {
    nav: { about: 'Nosotros', team: 'Equipo', gallery: 'Galería', aftercare: 'Cuidados', contact: 'Contacto', book: 'Reservar' },
    welcome: {
      hello: 'Bienvenidos',
      choose: 'Elige tu idioma',
      enter: 'Entrar',
    },
    hero: {
      studio: 'Tattoo Studio',
      quote: '"Cada tatuaje cuenta una historia sin tiempo."',
      cta1: 'Reserva una Consulta',
      cta2: 'Descubre el Cuidado del Tatuaje',
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Más que un estudio de tatuajes',
      p1: 'Atelier Noble Ink es un lugar donde el arte se encuentra con la piel, la historia se encuentra con la identidad y cada tatuaje se convierte en una obra sin tiempo.',
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Obras Seleccionadas',
      subtitle: 'Imágenes auténticas, detalles de materiales, atmósfera sofisticada — colores desaturados, tonos cálidos y naturales.',
      footnote: 'Portfolio completo disponible bajo petición en el estudio y en nuestras redes sociales.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamental', 'Realista', 'Botánico', 'Geométrico'],
    },
    contact: {
      eyebrow: 'Reservas',
      title: 'Reserva tu Consulta',
      subtitle: 'Cuéntanos tu idea: te responderemos para fijar una cita en el estudio.',
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Describe tu idea',
      submit: 'Enviar Solicitud',
      sent: 'Tu cliente de correo se está abriendo para completar el envío. Te esperamos en el atelier.',
      addressLabel: 'Dirección',
      address: 'Calle Los Emigrantes 4, San Isidro de Abona, Tenerife',
      directions: 'Cómo llegar',
      hoursLabel: 'Horario',
      hours: 'Todos los días, 10:00–18:00',
      contactLabel: 'Contacto',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    nav: { about: 'About', team: 'Team', gallery: 'Gallery', aftercare: 'Aftercare', contact: 'Contact', book: 'Book Now' },
    welcome: {
      hello: 'Welcome',
      choose: 'Choose your language',
      enter: 'Enter',
    },
    hero: {
      studio: 'Tattoo Studio',
      quote: '"Every tattoo tells a timeless story."',
      cta1: 'Book a Consultation',
      cta2: 'Discover Aftercare',
    },
    about: {
      eyebrow: 'About Us',
      title: 'More than a tattoo studio',
      p1: 'Atelier Noble Ink is a place where art meets skin, history meets identity, and every tattoo becomes a timeless piece.',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Selected Works',
      subtitle: 'Authentic imagery, material details, sophisticated atmosphere — desaturated colors, warm and natural tones.',
      footnote: 'Full portfolio available on request in studio and on our social channels.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamental', 'Realistic', 'Botanical', 'Geometric'],
    },
    contact: {
      eyebrow: 'Bookings',
      title: 'Book Your Consultation',
      subtitle: "Tell us your idea: we'll get back to you to set up an appointment in studio.",
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Describe your idea',
      submit: 'Send Request',
      sent: 'Your email client is opening to complete the request. See you soon at the atelier.',
      addressLabel: 'Address',
      address: 'Calle Los Emigrantes 4, San Isidro de Abona, Tenerife',
      directions: 'Get Directions',
      hoursLabel: 'Hours',
      hours: 'Every day, 10:00am–6:00pm',
      contactLabel: 'Contact',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  de: {
    nav: { about: 'Über Uns', team: 'Team', gallery: 'Galerie', aftercare: 'Nachsorge', contact: 'Kontakt', book: 'Termin buchen' },
    welcome: {
      hello: 'Willkommen',
      choose: 'Wähle deine Sprache',
      enter: 'Eintreten',
    },
    hero: {
      studio: 'Tattoo Studio',
      quote: '"Jedes Tattoo erzählt eine zeitlose Geschichte."',
      cta1: 'Beratung Buchen',
      cta2: 'Nachsorge Entdecken',
    },
    about: {
      eyebrow: 'Über Uns',
      title: 'Mehr als ein Tattoo-Studio',
      p1: 'Atelier Noble Ink ist ein Ort, an dem Kunst auf Haut trifft, Geschichte auf Identität trifft und jedes Tattoo zu einem zeitlosen Werk wird.',
    },
    gallery: {
      eyebrow: 'Galerie',
      title: 'Ausgewählte Werke',
      subtitle: 'Authentische Bilder, Materialdetails, edle Atmosphäre — entsättigte Farben, warme und natürliche Töne.',
      footnote: 'Vollständiges Portfolio auf Anfrage im Studio und auf unseren Social-Media-Kanälen.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamental', 'Realistisch', 'Botanisch', 'Geometrisch'],
    },
    contact: {
      eyebrow: 'Terminbuchung',
      title: 'Buche deine Beratung',
      subtitle: 'Erzähl uns deine Idee: Wir melden uns, um einen Termin im Studio zu vereinbaren.',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      message: 'Beschreibe deine Idee',
      submit: 'Anfrage Senden',
      sent: 'Dein E-Mail-Programm öffnet sich, um die Anfrage abzuschließen. Bis bald im Atelier.',
      addressLabel: 'Adresse',
      address: 'Calle Los Emigrantes 4, San Isidro de Abona, Tenerife',
      directions: 'Route Planen',
      hoursLabel: 'Öffnungszeiten',
      hours: 'Täglich, 10:00–18:00',
      contactLabel: 'Kontakt',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
}

// Unisce i testi aggiunti con il restyling (extras.js): le chiavi di extras hanno la precedenza
export const translations = Object.fromEntries(
  Object.entries(baseTranslations).map(([code, base]) => {
    const extra = extras[code] || {}
    const merged = { ...base }
    for (const key of Object.keys(extra)) {
      merged[key] =
        base[key] && typeof base[key] === 'object' && !Array.isArray(base[key])
          ? { ...base[key], ...extra[key] }
          : extra[key]
    }
    return [code, merged]
  }),
)
