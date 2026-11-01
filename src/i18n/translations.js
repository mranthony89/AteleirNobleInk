import { extras } from './extras.js'

export const languages = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

const teamNames = ['Marco Bellini', 'Sara Conti', 'Luca Ferretti']

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
      values: [
        { title: 'Consulenza', text: 'Ogni progetto nasce da un confronto attento, per trovare la soluzione più adatta a te.' },
        { title: 'Eccellenza', text: 'Lavoriamo con precisione, igiene e professionalità in ogni fase del tatuaggio.' },
        { title: 'Follow-Up', text: 'Il nostro lavoro continua anche dopo la seduta, accompagnandoti fino alla completa guarigione. Non ti lasciamo solo!' },
      ],
    },
    team: {
      eyebrow: 'Il Nostro Team',
      title: 'Le mani dietro ogni opera',
      members: [
        { name: teamNames[0], bio: 'Specializzato in blackwork e ornamentale, unisce tecnica precisa a uno stile scultoreo.', styles: 'Blackwork · Ornamentale · Geometrico' },
        { name: teamNames[1], bio: 'Maestra del fine line e dei soggetti botanici, cura ogni dettaglio con delicatezza.', styles: 'Fine Line · Botanico · Minimalista' },
        { name: teamNames[2], bio: 'Esperto in ritratti realistici e coperture, trasforma ogni idea in un\'opera vissuta.', styles: 'Realistico · Copertura · Ritratto' },
      ],
    },
    gallery: {
      eyebrow: 'Galleria',
      title: 'Opere Selezionate',
      subtitle: 'Immagini autentiche, dettagli di materiali, atmosfera sofisticata — colori desaturati, tonalità calde e naturali.',
      footnote: 'Portfolio completo disponibile su richiesta in studio e sui nostri canali social.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamentale', 'Realistico', 'Botanico', 'Geometrico'],
    },
    aftercare: {
      eyebrow: 'Cura Tatuaggio',
      heroTitle: 'La Cura del Tuo Tatuaggio',
      heroSubtitle: 'Segui queste semplici procedure per garantire una guarigione perfetta e mantenere i colori brillanti nel tempo.',
      introTitle: 'Il Percorso di Guarigione',
      introText: 'Il tuo tatuaggio merita le migliori attenzioni. Ecco cosa fare, giorno dopo giorno.',
      steps: [
        { badge: 'Giorni 1–3', label: 'Protezione', title: 'Mantieni il bendaggio', desc: 'Il tatuaggio è una ferita aperta. Mantieni il bendaggio per 2-4 ore. Lava delicatamente con acqua tiepida e sapone neutro. Non toccare con mani sporche.' },
        { badge: 'Giorni 4–7', label: 'Idratazione', title: 'Pulisci e idrata', desc: 'Lava il tatuaggio 2-3 volte al giorno. Applica uno strato sottile di crema specifica per tatuaggi. Non usare creme profumate. Evita ambienti umidi.' },
        { badge: 'Settimane 2–3', label: 'Desquamazione', title: 'Lascia che la pelle si stacchi', desc: 'La pelle inizierà a desquamarsi naturalmente. Non grattare! Applica crema idratante. Usa indumenti morbidi e traspiranti. Non forzare lo stacco.' },
        { badge: 'Settimana 4+', label: 'Maturazione', title: 'Proteggi e mantieni', desc: 'Il tatuaggio è guarito superficialmente, ma i colori si stabilizzano in 6 mesi. Proteggi dal sole con SPF 50+ per almeno 3 mesi. Continua l\'idratazione.' },
      ],
      warningsTitle: 'Cosa Fare e Cosa Non Fare',
      donts: [
        'Non immergere in acqua (piscina, mare, vasca) per 2 settimane',
        'Non esporre al sole diretto per almeno 1 mese',
        'Non grattare o staccare le croste',
        'Non usare alcol, acqua ossigenata o prodotti aggressivi',
        'Non indossare abiti stretti o ruvidi sulla zona tatuata',
      ],
      dos: [
        'Lava sempre le mani prima di toccare il tatuaggio',
        'Applica la crema solo con dita pulite',
        'Usa solo prodotti specifici per tatuaggi o vaselina pura',
      ],
      faqTitle: 'Domande Frequenti',
      faqs: [
        { q: 'Quanto tempo impiega a guarire completamente?', a: 'La superficie guarisce in 2-3 settimane, ma il tessuto sottostante richiede fino a 3 mesi per una completa maturazione. I colori si stabilizzano definitivamente dopo circa 6 mesi.' },
        { q: 'Posso fare sport dopo il tatuaggio?', a: 'Evita attività fisica intensa per almeno 4-5 giorni, poiché il sudore può irritare la pelle e causare infezioni. Attività leggera come camminare è ok dopo 2 giorni.' },
        { q: 'Il tatuaggio può infettarsi? Come riconosco i segnali?', a: 'Sì, se non segui le giuste procedure. Segnali di allarme: gonfiore eccessivo, arrossamento che peggiora dopo 3 giorni, febbre, secrezione maleodorante, dolore intenso e pulsante. Contatta subito il tuo tatuatore.' },
        { q: 'Quando posso tornare a fare la doccia normalmente?', a: 'Dal giorno stesso con acqua tiepida, ma evita getti d\'acqua diretti sul tatuaggio per i primi 3 giorni. Asciuga tamponando delicatamente con un panno pulito, mai strofinando.' },
        { q: 'Posso usare creme solari sul tatuaggio?', a: 'Sì, ma solo dopo che il tatuaggio è completamente guarito (circa 4 settimane). Usa protezione solare SPF 50+ per evitare che i colori sbiadiscano. Applica ogni 2 ore se esposto al sole.' },
      ],
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
      values: [
        { title: 'Consulta', text: 'Cada proyecto nace de una conversación atenta, para encontrar la solución más adecuada para ti.' },
        { title: 'Excelencia', text: 'Trabajamos con precisión, higiene y profesionalidad en cada fase del tatuaje.' },
        { title: 'Seguimiento', text: 'Nuestro trabajo continúa después de la sesión, acompañándote hasta la completa curación. ¡No te dejamos solo!' },
      ],
    },
    team: {
      eyebrow: 'Nuestro Equipo',
      title: 'Las manos detrás de cada obra',
      members: [
        { name: teamNames[0], bio: 'Especializado en blackwork y ornamental, une técnica precisa a un estilo escultórico.', styles: 'Blackwork · Ornamental · Geométrico' },
        { name: teamNames[1], bio: 'Maestra del fine line y de los motivos botánicos, cuida cada detalle con delicadeza.', styles: 'Fine Line · Botánico · Minimalista' },
        { name: teamNames[2], bio: 'Experto en retratos realistas y coberturas, transforma cada idea en una obra vivida.', styles: 'Realista · Cobertura · Retrato' },
      ],
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Obras Seleccionadas',
      subtitle: 'Imágenes auténticas, detalles de materiales, atmósfera sofisticada — colores desaturados, tonos cálidos y naturales.',
      footnote: 'Portfolio completo disponible bajo petición en el estudio y en nuestras redes sociales.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamental', 'Realista', 'Botánico', 'Geométrico'],
    },
    aftercare: {
      eyebrow: 'Cuidados',
      heroTitle: 'El Cuidado de tu Tatuaje',
      heroSubtitle: 'Sigue estas sencillas pautas para garantizar una curación perfecta y mantener los colores vivos con el tiempo.',
      introTitle: 'El Proceso de Curación',
      introText: 'Tu tatuaje merece las mejores atenciones. Esto es lo que debes hacer, día a día.',
      steps: [
        { badge: 'Días 1–3', label: 'Protección', title: 'Mantén el vendaje', desc: 'El tatuaje es una herida abierta. Mantén el vendaje entre 2 y 4 horas. Lava con suavidad con agua tibia y jabón neutro. No lo toques con las manos sucias.' },
        { badge: 'Días 4–7', label: 'Hidratación', title: 'Limpia e hidrata', desc: 'Lava el tatuaje 2-3 veces al día. Aplica una capa fina de crema específica para tatuajes. No uses cremas perfumadas. Evita ambientes húmedos.' },
        { badge: 'Semanas 2–3', label: 'Descamación', title: 'Deja que la piel se desprenda', desc: 'La piel comenzará a descamarse de forma natural. ¡No rasques! Aplica crema hidratante. Usa ropa suave y transpirable. No fuerces el desprendimiento.' },
        { badge: 'Semana 4+', label: 'Maduración', title: 'Protege y mantén', desc: 'El tatuaje ha sanado en superficie, pero los colores se estabilizan en 6 meses. Protégelo del sol con SPF 50+ durante al menos 3 meses. Continúa hidratando.' },
      ],
      warningsTitle: 'Qué Hacer y Qué No Hacer',
      donts: [
        'No lo sumerjas en agua (piscina, mar, bañera) durante 2 semanas',
        'No lo expongas al sol directo durante al menos 1 mes',
        'No rasques ni despegues las costras',
        'No uses alcohol, agua oxigenada ni productos agresivos',
        'No uses ropa ajustada o áspera sobre la zona tatuada',
      ],
      dos: [
        'Lávate siempre las manos antes de tocar el tatuaje',
        'Aplica la crema solo con los dedos limpios',
        'Usa solo productos específicos para tatuajes o vaselina pura',
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqs: [
        { q: '¿Cuánto tiempo tarda en sanar por completo?', a: 'La superficie sana en 2-3 semanas, pero el tejido interior necesita hasta 3 meses para madurar por completo. Los colores se estabilizan definitivamente a los 6 meses aproximadamente.' },
        { q: '¿Puedo hacer deporte después del tatuaje?', a: 'Evita la actividad física intensa durante al menos 4-5 días, ya que el sudor puede irritar la piel y causar infecciones. Una actividad ligera como caminar está bien después de 2 días.' },
        { q: '¿Puede infectarse el tatuaje? ¿Cómo reconozco las señales?', a: 'Sí, si no sigues las pautas adecuadas. Señales de alarma: hinchazón excesiva, enrojecimiento que empeora tras 3 días, fiebre, secreción con mal olor, dolor intenso y pulsátil. Contacta enseguida con tu tatuador.' },
        { q: '¿Cuándo puedo volver a ducharme con normalidad?', a: 'Desde el mismo día, con agua tibia, pero evita el chorro directo sobre el tatuaje los primeros 3 días. Sécalo dando toques suaves con un paño limpio, nunca frotando.' },
        { q: '¿Puedo usar crema solar sobre el tatuaje?', a: 'Sí, pero solo cuando el tatuaje esté completamente curado (unas 4 semanas). Usa protección solar SPF 50+ para evitar que los colores se desvanezcan. Aplícala cada 2 horas si estás expuesto al sol.' },
      ],
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
      values: [
        { title: 'Consultation', text: 'Every project starts with an attentive conversation, to find the solution that suits you best.' },
        { title: 'Excellence', text: 'We work with precision, hygiene, and professionalism at every stage of the tattoo.' },
        { title: 'Follow-Up', text: "Our work continues after the session, guiding you through complete healing. We won't leave you on your own!" },
      ],
    },
    team: {
      eyebrow: 'Our Team',
      title: 'The hands behind every piece',
      members: [
        { name: teamNames[0], bio: 'Specialized in blackwork and ornamental designs, blending precise technique with a sculptural style.', styles: 'Blackwork · Ornamental · Geometric' },
        { name: teamNames[1], bio: 'A master of fine line and botanical subjects, tending to every detail with delicacy.', styles: 'Fine Line · Botanical · Minimalist' },
        { name: teamNames[2], bio: 'Expert in realistic portraits and cover-ups, turning every idea into a lived-in piece.', styles: 'Realistic · Cover-up · Portrait' },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Selected Works',
      subtitle: 'Authentic imagery, material details, sophisticated atmosphere — desaturated colors, warm and natural tones.',
      footnote: 'Full portfolio available on request in studio and on our social channels.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamental', 'Realistic', 'Botanical', 'Geometric'],
    },
    aftercare: {
      eyebrow: 'Aftercare',
      heroTitle: 'Caring for Your Tattoo',
      heroSubtitle: 'Follow these simple steps to ensure a perfect healing process and keep the colors vibrant over time.',
      introTitle: 'The Healing Journey',
      introText: 'Your tattoo deserves the best care. Here is what to do, day by day.',
      steps: [
        { badge: 'Days 1–3', label: 'Protection', title: 'Keep the bandage on', desc: 'A tattoo is an open wound. Keep the bandage on for 2-4 hours. Wash gently with lukewarm water and neutral soap. Do not touch it with dirty hands.' },
        { badge: 'Days 4–7', label: 'Hydration', title: 'Clean and moisturize', desc: 'Wash the tattoo 2-3 times a day. Apply a thin layer of tattoo-specific cream. Avoid scented creams. Stay away from humid environments.' },
        { badge: 'Weeks 2–3', label: 'Peeling', title: 'Let the skin flake naturally', desc: 'The skin will start to peel naturally. Do not scratch it! Apply moisturizer. Wear soft, breathable clothing. Never force the peeling.' },
        { badge: 'Week 4+', label: 'Maturation', title: 'Protect and maintain', desc: 'The tattoo has healed on the surface, but colors settle over 6 months. Protect it from the sun with SPF 50+ for at least 3 months. Keep moisturizing.' },
      ],
      warningsTitle: 'What to Do and What Not to Do',
      donts: [
        'Do not soak it in water (pool, sea, bathtub) for 2 weeks',
        'Do not expose it to direct sun for at least 1 month',
        'Do not scratch or pick at scabs',
        'Do not use alcohol, hydrogen peroxide, or harsh products',
        'Do not wear tight or rough clothing over the tattooed area',
      ],
      dos: [
        'Always wash your hands before touching the tattoo',
        'Apply cream only with clean fingers',
        'Use only tattoo-specific products or pure petroleum jelly',
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How long does it take to heal completely?', a: 'The surface heals in 2-3 weeks, but the deeper tissue takes up to 3 months to fully mature. Colors settle permanently after about 6 months.' },
        { q: 'Can I exercise after getting a tattoo?', a: 'Avoid intense physical activity for at least 4-5 days, as sweat can irritate the skin and cause infections. Light activity like walking is fine after 2 days.' },
        { q: 'Can a tattoo get infected? How do I spot the signs?', a: 'Yes, if you don\'t follow the proper procedures. Warning signs: excessive swelling, redness that worsens after 3 days, fever, foul-smelling discharge, intense throbbing pain. Contact your tattoo artist right away.' },
        { q: 'When can I shower normally again?', a: 'From the same day, with lukewarm water, but avoid direct water jets on the tattoo for the first 3 days. Pat dry gently with a clean cloth, never rub.' },
        { q: 'Can I use sunscreen on the tattoo?', a: 'Yes, but only once the tattoo is fully healed (about 4 weeks). Use SPF 50+ sunscreen to prevent the colors from fading. Reapply every 2 hours if exposed to the sun.' },
      ],
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
      values: [
        { title: 'Beratung', text: 'Jedes Projekt beginnt mit einem aufmerksamen Gespräch, um die für dich passendste Lösung zu finden.' },
        { title: 'Exzellenz', text: 'Wir arbeiten mit Präzision, Hygiene und Professionalität in jeder Phase des Tattoos.' },
        { title: 'Nachbetreuung', text: 'Unsere Arbeit geht nach der Sitzung weiter und begleitet dich bis zur vollständigen Heilung. Wir lassen dich nicht allein!' },
      ],
    },
    team: {
      eyebrow: 'Unser Team',
      title: 'Die Hände hinter jedem Werk',
      members: [
        { name: teamNames[0], bio: 'Spezialisiert auf Blackwork und ornamentale Designs, verbindet präzise Technik mit einem skulpturalen Stil.', styles: 'Blackwork · Ornamental · Geometrisch' },
        { name: teamNames[1], bio: 'Meisterin des Fine Line und botanischer Motive, widmet sich jedem Detail mit Feingefühl.', styles: 'Fine Line · Botanisch · Minimalistisch' },
        { name: teamNames[2], bio: 'Experte für realistische Porträts und Cover-ups, verwandelt jede Idee in ein gelebtes Werk.', styles: 'Realistisch · Cover-up · Porträt' },
      ],
    },
    gallery: {
      eyebrow: 'Galerie',
      title: 'Ausgewählte Werke',
      subtitle: 'Authentische Bilder, Materialdetails, edle Atmosphäre — entsättigte Farben, warme und natürliche Töne.',
      footnote: 'Vollständiges Portfolio auf Anfrage im Studio und auf unseren Social-Media-Kanälen.',
      pieces: ['Fine Line', 'Blackwork', 'Ornamental', 'Realistisch', 'Botanisch', 'Geometrisch'],
    },
    aftercare: {
      eyebrow: 'Nachsorge',
      heroTitle: 'Die Pflege deines Tattoos',
      heroSubtitle: 'Befolge diese einfachen Schritte für eine perfekte Heilung und leuchtende Farben, die lange halten.',
      introTitle: 'Der Heilungsprozess',
      introText: 'Dein Tattoo verdient die beste Pflege. So gehst du Tag für Tag vor.',
      steps: [
        { badge: 'Tag 1–3', label: 'Schutz', title: 'Verband anlassen', desc: 'Ein Tattoo ist eine offene Wunde. Lass den Verband 2-4 Stunden drauf. Wasche vorsichtig mit lauwarmem Wasser und milder Seife. Nicht mit schmutzigen Händen berühren.' },
        { badge: 'Tag 4–7', label: 'Feuchtigkeit', title: 'Reinigen und eincremen', desc: 'Wasche das Tattoo 2-3 Mal täglich. Trage eine dünne Schicht spezielle Tattoo-Creme auf. Keine parfümierten Cremes verwenden. Feuchte Umgebungen meiden.' },
        { badge: 'Woche 2–3', label: 'Abschälen', title: 'Haut natürlich abschälen lassen', desc: 'Die Haut beginnt sich natürlich zu schälen. Nicht kratzen! Feuchtigkeitscreme auftragen. Weiche, atmungsaktive Kleidung tragen. Das Abschälen nie erzwingen.' },
        { badge: 'Woche 4+', label: 'Reifung', title: 'Schützen und pflegen', desc: 'Das Tattoo ist oberflächlich verheilt, aber die Farben stabilisieren sich erst nach 6 Monaten. Mindestens 3 Monate mit LSF 50+ vor Sonne schützen. Weiter eincremen.' },
      ],
      warningsTitle: 'Was zu tun ist und was nicht',
      donts: [
        'Nicht 2 Wochen lang in Wasser tauchen (Pool, Meer, Badewanne)',
        'Mindestens 1 Monat nicht direkter Sonne aussetzen',
        'Krusten nicht kratzen oder ablösen',
        'Keinen Alkohol, kein Wasserstoffperoxid oder aggressive Produkte verwenden',
        'Keine enge oder raue Kleidung über der tätowierten Stelle tragen',
      ],
      dos: [
        'Immer die Hände waschen, bevor du das Tattoo berührst',
        'Creme nur mit sauberen Fingern auftragen',
        'Nur tattoospezifische Produkte oder reine Vaseline verwenden',
      ],
      faqTitle: 'Häufig Gestellte Fragen',
      faqs: [
        { q: 'Wie lange dauert es, bis es vollständig verheilt ist?', a: 'Die Oberfläche heilt in 2-3 Wochen, aber das darunterliegende Gewebe braucht bis zu 3 Monate, um vollständig auszureifen. Die Farben stabilisieren sich endgültig nach etwa 6 Monaten.' },
        { q: 'Kann ich nach dem Tätowieren Sport treiben?', a: 'Vermeide mindestens 4-5 Tage lang intensive körperliche Aktivität, da Schweiß die Haut reizen und Infektionen verursachen kann. Leichte Aktivität wie Gehen ist nach 2 Tagen in Ordnung.' },
        { q: 'Kann sich ein Tattoo infizieren? Wie erkenne ich die Anzeichen?', a: 'Ja, wenn du die richtigen Vorgehensweisen nicht befolgst. Warnzeichen: übermäßige Schwellung, Rötung, die sich nach 3 Tagen verschlimmert, Fieber, übelriechender Ausfluss, starke pochende Schmerzen. Kontaktiere sofort deinen Tätowierer.' },
        { q: 'Wann kann ich wieder normal duschen?', a: 'Ab dem gleichen Tag mit lauwarmem Wasser, aber vermeide in den ersten 3 Tagen einen direkten Wasserstrahl auf das Tattoo. Vorsichtig mit einem sauberen Tuch trockentupfen, niemals reiben.' },
        { q: 'Kann ich Sonnencreme auf dem Tattoo verwenden?', a: 'Ja, aber erst wenn das Tattoo vollständig verheilt ist (etwa 4 Wochen). Verwende Sonnenschutz mit LSF 50+, damit die Farben nicht verblassen. Bei Sonnenexposition alle 2 Stunden erneut auftragen.' },
      ],
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
