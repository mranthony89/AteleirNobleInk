// Testi aggiunti con il restyling (stili, rituale, recensioni, film, form...).
// Tutti i contenuti di team, recensioni e stili sono ESEMPI da sostituire con i dati reali.
// Vengono uniti a translations.js: le chiavi qui presenti hanno la precedenza.

export const extras = {
  it: {
    // Verificato su fonti dermatologiche e siti di studi di tatuaggio (vedi README)
    aftercare: {
      "eyebrow": "Cura Tatuaggio",
      "heroTitle": "La Cura del Tuo Tatuaggio",
      "heroSubtitle": "Segui queste semplici procedure per garantire una guarigione perfetta e mantenere i colori brillanti nel tempo.",
      "introTitle": "Il Percorso di Guarigione",
      "introText": "Il tuo tatuaggio merita le migliori attenzioni. Ecco cosa fare, giorno dopo giorno. Se il tuo tatuatore ti dà indicazioni diverse, seguile: vengono prima di questa guida.",
      "steps": [
        {
          "badge": "Giorni 1–3",
          "label": "Protezione",
          "title": "Proteggi con la pellicola trasparente",
          "desc": "Il tatuaggio è una ferita aperta: lo copriamo con una speciale pellicola trasparente per tatuaggi, che lo protegge e lo lascia respirare. Di solito resta 2–4 giorni, come ti indicherà il tatuatore. Un po' di liquido sotto la pellicola è normale; toglila prima se si stacca, perde o la pelle si arrossa e si irrita."
        },
        {
          "badge": "Giorni 4–7",
          "label": "Idratazione",
          "title": "Rimuovi, lava e idrata",
          "desc": "Togli la pellicola lentamente, vicino alla pelle e aiutandoti con acqua tiepida. Lava con delicatezza con sapone neutro senza profumo, asciuga tamponando e lascia respirare qualche minuto. Poi lava 2 volte al giorno e applica un velo sottile di crema neutra senza profumo: troppa crema non aiuta."
        },
        {
          "badge": "Settimane 2–3",
          "label": "Desquamazione",
          "title": "Se la pelle si secca, lascia fare",
          "desc": "Non succede a tutti, ma la pelle può seccarsi, desquamarsi o formare piccole crosticine. È normale, però non strappare né grattare: lascia che cadano da sole. Continua a idratare con un velo sottile e usa indumenti morbidi e traspiranti."
        },
        {
          "badge": "Settimana 4+",
          "label": "Maturazione",
          "title": "Proteggi e mantieni",
          "desc": "In superficie il tatuaggio guarisce in circa 2–4 settimane, ma gli strati profondi richiedono alcuni mesi. Una volta guarito, proteggilo dal sole con SPF 50+ ed evita le lampade abbronzanti. Continua a idratare la pelle."
        }
      ],
      "warningsTitle": "Cosa Fare e Cosa Non Fare",
      "donts": [
        "Non immergere in acqua (piscina, mare, vasca) per 2–4 settimane: la doccia va bene",
        "Non esporre al sole diretto né ai lettini abbronzanti finché non è guarito",
        "Non grattare né staccare le crosticine o la pelle che si secca",
        "Non usare alcol, acqua ossigenata o prodotti aggressivi",
        "Non indossare abiti stretti o ruvidi sulla zona tatuata"
      ],
      "dos": [
        "Lava sempre le mani prima di toccare il tatuaggio",
        "Applica la crema solo con dita pulite e in strato sottile",
        "Usa un detergente neutro e una crema senza profumo, oppure i prodotti consigliati dal tuo tatuatore",
        "Se la pellicola si stacca o perde, toglila e contatta il tuo tatuatore"
      ],
      "faqTitle": "Domande Frequenti",
      "faqs": [
        {
          "q": "Quanto tempo impiega a guarire completamente?",
          "a": "In genere la superficie guarisce in 2–4 settimane, ma gli strati più profondi possono richiedere alcuni mesi. Ognuno guarisce con i propri tempi: segui sempre le indicazioni del tuo tatuatore."
        },
        {
          "q": "La mia pelle non si squama: è normale?",
          "a": "Sì. Desquamazione e crosticine possono comparire, ma non succede a tutti: dipende dalla pelle, dalla zona e dal tipo di tatuaggio. Se la pelle non si squama non significa che guarisca male: continua con la stessa cura."
        },
        {
          "q": "Posso fare sport dopo il tatuaggio?",
          "a": "Evita attività fisica intensa per almeno 4-5 giorni, poiché il sudore può irritare la pelle e causare infezioni. Attività leggera come camminare è ok dopo 2 giorni."
        },
        {
          "q": "Il tatuaggio può infettarsi? Come riconosco i segnali?",
          "a": "Sì, se non si seguono le giuste procedure. Segnali di allarme: gonfiore eccessivo, arrossamento che peggiora dopo 3 giorni, pelle molto calda, febbre, secrezione maleodorante, dolore intenso e pulsante, strisce rosse che si allargano. Se compare un'eruzione sotto la pellicola, toglila subito. Contatta il tuo tatuatore o il medico."
        },
        {
          "q": "Posso fare la doccia?",
          "a": "Con la pellicola trasparente puoi fare la doccia con acqua tiepida, evitando getti diretti e immersioni. Senza pellicola, lava con delicatezza senza strofinare e asciuga tamponando con un panno pulito."
        },
        {
          "q": "Posso usare creme solari sul tatuaggio?",
          "a": "Sì, ma solo dopo che il tatuaggio è completamente guarito (circa 4 settimane); prima proteggilo con abiti coprenti. Poi usa SPF 50+ per evitare che i colori sbiadiscano e riapplica ogni 2 ore se sei al sole."
        }
      ]
    },
    footer: { credit: 'Dalle tue necessità, alle soluzioni su misura', toTop: 'Torna in cima alla pagina' },
    nav: { styles: 'Stili' },
    hero: { film: "Film d'Atelier", scroll: 'Scorri' },
    film: {
      title: "Film d'Atelier",
      soon: 'Il film sarà disponibile a breve.',
      close: 'Chiudi',
    },
    ritual: {
      eyebrow: "L'Esperienza",
      title: 'Il Nostro Rituale in Tre Fasi',
      subtitle: "Un percorso intimo e curato che trasforma la seduta in un momento da ricordare.",
      steps: [
        { title: 'Consulto & Bozzetto Unico', text: "Incontro privato con l'artista dedicato. Studio del corpo, delle linee muscolari e bozzetto su misura prima di iniziare.", tag: 'Su misura al 100%' },
        { title: 'Seduta Privata', text: 'Suite climatizzata, poltrona ergonomica, musica a scelta e infusi artigianali. Silenzio, concentrazione e massima igiene.', tag: 'Comfort & Igiene' },
        { title: 'Protocollo Aftercare', text: 'Kit di cura omaggio, istruzioni passo passo e controllo fotografico della guarigione. Non ti lasciamo solo.', tag: 'Follow-Up incluso' },
      ],
    },
    styles: {
      eyebrow: 'Stili',
      title: 'Scegli la tua Corrente Visiva',
      subtitle: 'Ogni stile ha il suo artista, il suo tempo e la sua anima. Scopri quello che ti somiglia di più.',
      artistLabel: 'Artista',
      focusLabel: 'Ideale per',
      timeLabel: 'Durata',
      cta: 'Richiedi un bozzetto in questo stile',
      items: [
        { label: 'Realismo', title: 'Realismo', desc: 'Ritratti e soggetti dal dettaglio fotografico, costruiti con sfumature morbide in bianco e nero.', focus: 'Avambracci, polpacci, soggetti scultorei', time: '2–3 sedute', artist: 0 },
        { label: 'Giapponese', title: 'Orientale', desc: 'Draghi, onde e simboli della tradizione giapponese, con linee decise e composizioni che seguono il braccio.', focus: 'Braccia e gambe, manicotti', time: '3–5 sedute', artist: 1 },
        { label: 'Chicano', title: 'Chicano e Lettering', desc: 'Volti, scritte e simboli in bianco e nero dal carattere deciso, tra tradizione di strada e ritratto.', focus: 'Avambracci, polpacci', time: '2–3 sedute', artist: 1 },
        { label: 'Fine Line', title: 'Linea Sottile', desc: 'Tratti delicati e piccoli soggetti: soli, animali, frasi e dettagli eleganti.', focus: 'Soggetti piccoli e medi', time: '1 seduta (1–3 ore)', artist: 2 },
        { label: 'Floreale', title: 'Floreale', desc: 'Rose, gigli e fiori disegnati seguendo la curva del corpo, in nero o con un tocco di colore.', focus: 'Braccia, schiena, fianchi', time: '1–2 sedute', artist: 2 },
      ],
    },
    team: {
      eyebrow: 'I Maestri d\'Atelier',
      title: 'Le mani dietro ogni opera',
      roleLabel: ['Fondatore · Artista residente', 'Collaboratore stabile', 'Artista residente'],
      members: [
        { name: 'Francesco Parisi', bio: 'Fondatore dello studio: unisce realismo e lavori in bianco e nero con una grande cura per il dettaglio.', styles: 'Realismo · Bianco e nero · Lettering', availability: 'Agenda aperta' },
        { name: 'Sebastian Velasquez', bio: 'Collabora in modo stabile con lo studio: stile deciso, tra tradizione orientale e chicano, con composizioni che seguono il corpo.', styles: 'Giapponese · Chicano · Lettering', availability: 'Ultime date disponibili' },
        { name: 'Chiara Morandi', bio: 'Illustratrice botanica di formazione accademica: la sua firma è una linea evanescente, quasi incisa a bulino.', styles: 'Fine Line · Botanico · Minimalista', availability: 'Su invito' },
      ],
    },
    gallery: { close: 'Chiudi', prev: 'Precedente', next: 'Successiva', zoom: 'Ingrandisci' },
    reviews: {
      eyebrow: 'Testimonianze',
      title: "La Parola a Chi Indossa l'Opera",
      subtitle: 'Alcune parole dei nostri clienti.',
      items: [
        { text: "Non è solo un tatuaggio, è stata un'esperienza di raccoglimento assoluto. Nessun rumore, un luogo curato in ogni dettaglio.", name: 'Beatrice R.', detail: 'Primo tatuaggio' },
        { text: 'La precisione del tratto di Chiara è sorprendente. Dopo 18 mesi le sfumature sono perfettamente intatte, identiche al primo giorno.', name: 'Lorenzo F.', detail: 'Fine line' },
        { text: "Protocollo post-cura impeccabile: si vede la cura per il cliente anche dopo la seduta. Non ho mai avuto un'esperienza simile.", name: 'Ginevra D.', detail: 'Copertura' },
      ],
    },
    contact: {
      submit: 'Invia su WhatsApp',
      sentTitle: 'Si sta aprendo WhatsApp',
      sentText: 'Premi "Invia" in WhatsApp per completare la richiesta. Se non si è aperto, usa il pulsante qui sotto.',
      reopen: 'Apri WhatsApp',
      sendAnother: 'Compila un altro messaggio',
      optional: 'facoltativa',
      privacy: 'Si aprirà WhatsApp con il tuo messaggio già scritto: premi "Invia" per spedirlo. Il sito non salva i tuoi dati.',
      whatsappCard: 'WhatsApp',
      whatsappBar: 'Prenota su WhatsApp',
      waMessage: 'Ciao Atelier Noble Ink! Vorrei prenotare una consulenza.',
    },
  },

  es: {
    // Verificato su fonti dermatologiche e siti di studi di tatuaggio (vedi README)
    aftercare: {
      "eyebrow": "Cuidados",
      "heroTitle": "El Cuidado de tu Tatuaje",
      "heroSubtitle": "Sigue estas sencillas pautas para garantizar una curación perfecta y mantener los colores vivos con el tiempo.",
      "introTitle": "El Proceso de Curación",
      "introText": "Tu tatuaje merece las mejores atenciones. Esto es lo que debes hacer, día a día. Si tu tatuador te da indicaciones distintas, síguelas: van antes que esta guía.",
      "steps": [
        {
          "badge": "Días 1–3",
          "label": "Protección",
          "title": "Protege con la película transparente",
          "desc": "El tatuaje es una herida abierta: lo cubrimos con una película transparente especial para tatuajes, que lo protege y lo deja respirar. Suele quedarse 2–4 días, según te indique el tatuador. Algo de líquido bajo la película es normal; quítala antes si se despega, pierde o la piel se enrojece e irrita."
        },
        {
          "badge": "Días 4–7",
          "label": "Hidratación",
          "title": "Retira, lava e hidrata",
          "desc": "Retira la película despacio, pegada a la piel y ayudándote con agua tibia. Lava con suavidad con jabón neutro sin perfume, seca a toquecitos y deja respirar unos minutos. Después lava 2 veces al día y aplica una capa fina de crema neutra sin perfume: más crema no ayuda."
        },
        {
          "badge": "Semanas 2–3",
          "label": "Descamación",
          "title": "Si la piel se seca, déjala hacer",
          "desc": "No le pasa a todo el mundo, pero la piel puede secarse, descamarse o formar pequeñas costras. Es normal, pero no arranques ni rasques: deja que caigan solas. Sigue hidratando con una capa fina y usa ropa suave y transpirable."
        },
        {
          "badge": "Semana 4+",
          "label": "Maduración",
          "title": "Protege y mantén",
          "desc": "En superficie el tatuaje sana en unas 2–4 semanas, pero las capas profundas tardan algunos meses. Una vez curado, protégelo del sol con SPF 50+ y evita las cabinas de bronceado. Sigue hidratando la piel."
        }
      ],
      "warningsTitle": "Qué Hacer y Qué No Hacer",
      "donts": [
        "No lo sumerjas en agua (piscina, mar, bañera) durante 2–4 semanas: la ducha está bien",
        "No lo expongas al sol directo ni a cabinas de bronceado hasta que esté curado",
        "No rasques ni despegues las costras o la piel que se seca",
        "No uses alcohol, agua oxigenada ni productos agresivos",
        "No uses ropa ajustada o áspera sobre la zona tatuada"
      ],
      "dos": [
        "Lávate siempre las manos antes de tocar el tatuaje",
        "Aplica la crema solo con los dedos limpios y en capa fina",
        "Usa un limpiador neutro y una crema sin perfume, o los productos que te recomiende tu tatuador",
        "Si la película se despega o pierde, quítala y contacta con tu tatuador"
      ],
      "faqTitle": "Preguntas Frecuentes",
      "faqs": [
        {
          "q": "¿Cuánto tiempo tarda en sanar por completo?",
          "a": "Por lo general la superficie sana en 2–4 semanas, pero las capas más profundas pueden tardar algunos meses. Cada persona sana a su ritmo: sigue siempre las indicaciones de tu tatuador."
        },
        {
          "q": "Mi piel no se descama: ¿es normal?",
          "a": "Sí. La descamación y las costras pueden aparecer, pero no le ocurre a todo el mundo: depende de la piel, de la zona y del tipo de tatuaje. Que la piel no se descame no significa que sane mal: sigue con el mismo cuidado."
        },
        {
          "q": "¿Puedo hacer deporte después del tatuaje?",
          "a": "Evita la actividad física intensa durante al menos 4-5 días, ya que el sudor puede irritar la piel y causar infecciones. Una actividad ligera como caminar está bien después de 2 días."
        },
        {
          "q": "¿Puede infectarse el tatuaje? ¿Cómo reconozco las señales?",
          "a": "Sí, si no se siguen las pautas adecuadas. Señales de alarma: hinchazón excesiva, enrojecimiento que empeora tras 3 días, piel muy caliente, fiebre, secreción con mal olor, dolor intenso y pulsátil, líneas rojas que se extienden. Si aparece una erupción bajo la película, quítala enseguida. Contacta con tu tatuador o con un médico."
        },
        {
          "q": "¿Puedo ducharme?",
          "a": "Con la película transparente puedes ducharte con agua tibia, evitando el chorro directo y la inmersión. Sin película, lava con suavidad sin frotar y seca a toquecitos con un paño limpio."
        },
        {
          "q": "¿Puedo usar crema solar sobre el tatuaje?",
          "a": "Sí, pero solo cuando el tatuaje esté completamente curado (unas 4 semanas); antes, protégelo con ropa que lo cubra. Después usa SPF 50+ para evitar que los colores se desvanezcan y reaplica cada 2 horas si estás al sol."
        }
      ]
    },
    footer: { credit: 'De tus necesidades, a soluciones a medida', toTop: 'Volver arriba' },
    nav: { styles: 'Estilos' },
    hero: { film: 'Film del Atelier', scroll: 'Desliza' },
    film: {
      title: 'Film del Atelier',
      soon: 'El film estará disponible próximamente.',
      close: 'Cerrar',
    },
    ritual: {
      eyebrow: 'La Experiencia',
      title: 'Nuestro Ritual en Tres Fases',
      subtitle: 'Un recorrido íntimo y cuidado que convierte la sesión en un momento para recordar.',
      steps: [
        { title: 'Consulta & Boceto Único', text: 'Encuentro privado con el artista asignado. Estudio del cuerpo, de las líneas musculares y boceto a medida antes de empezar.', tag: '100% a medida' },
        { title: 'Sesión Privada', text: 'Suite climatizada, sillón ergonómico, música a elección e infusiones artesanales. Silencio, concentración y máxima higiene.', tag: 'Confort & Higiene' },
        { title: 'Protocolo de Cuidados', text: 'Kit de cuidado de regalo, instrucciones paso a paso y control fotográfico de la cicatrización. No te dejamos solo.', tag: 'Seguimiento incluido' },
      ],
    },
    styles: {
      eyebrow: 'Estilos',
      title: 'Elige tu Corriente Visual',
      subtitle: 'Cada estilo tiene su artista, su tiempo y su alma. Descubre el que más se parece a ti.',
      artistLabel: 'Artista',
      focusLabel: 'Ideal para',
      timeLabel: 'Duración',
      cta: 'Solicita un boceto en este estilo',
      items: [
        { label: 'Realismo', title: 'Realismo', desc: 'Retratos y motivos con detalle fotográfico, construidos con suaves degradados en blanco y negro.', focus: 'Antebrazos, gemelos, motivos escultóricos', time: '2–3 sesiones', artist: 0 },
        { label: 'Japonés', title: 'Oriental', desc: 'Dragones, olas y símbolos de la tradición japonesa, con líneas decididas y composiciones que siguen el brazo.', focus: 'Brazos y piernas, mangas', time: '3–5 sesiones', artist: 1 },
        { label: 'Chicano', title: 'Chicano y Lettering', desc: 'Rostros, letras y símbolos en blanco y negro de carácter fuerte, entre la tradición callejera y el retrato.', focus: 'Antebrazos, gemelos', time: '2–3 sesiones', artist: 1 },
        { label: 'Fine Line', title: 'Línea Fina', desc: 'Trazos delicados y pequeños motivos: soles, animales, frases y detalles elegantes.', focus: 'Motivos pequeños y medianos', time: '1 sesión (1–3 horas)', artist: 2 },
        { label: 'Floral', title: 'Floral', desc: 'Rosas, lirios y flores dibujados siguiendo la curva del cuerpo, en negro o con un toque de color.', focus: 'Brazos, espalda, costados', time: '1–2 sesiones', artist: 2 },
      ],
    },
    team: {
      eyebrow: 'Los Maestros del Atelier',
      title: 'Las manos detrás de cada obra',
      roleLabel: ['Fundador · Artista residente', 'Colaborador estable', 'Artista residente'],
      members: [
        { name: 'Francesco Parisi', bio: 'Fundador del estudio: une realismo y trabajos en blanco y negro con un gran cuidado por el detalle.', styles: 'Realismo · Blanco y negro · Lettering', availability: 'Agenda abierta' },
        { name: 'Sebastian Velasquez', bio: 'Colabora de forma estable con el estudio: estilo decidido, entre tradición oriental y chicano, con composiciones que siguen el cuerpo.', styles: 'Japonés · Chicano · Lettering', availability: 'Últimas fechas disponibles' },
        { name: 'Chiara Morandi', bio: 'Ilustradora botánica de formación académica: su firma es una línea evanescente, casi grabada a buril.', styles: 'Fine Line · Botánico · Minimalista', availability: 'Solo por invitación' },
      ],
    },
    gallery: { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente', zoom: 'Ampliar' },
    reviews: {
      eyebrow: 'Testimonios',
      title: 'La Palabra de Quien Lleva la Obra',
      subtitle: 'Algunas palabras de nuestros clientes.',
      items: [
        { text: 'No es solo un tatuaje, fue una experiencia de recogimiento absoluto. Ningún ruido, un lugar cuidado en cada detalle.', name: 'Beatriz R.', detail: 'Primer tatuaje' },
        { text: 'La precisión del trazo de Chiara es sorprendente. Tras 18 meses los matices siguen perfectos, idénticos al primer día.', name: 'Lorenzo F.', detail: 'Fine line' },
        { text: 'Protocolo de cuidados impecable: se nota el mimo por el cliente incluso después de la sesión. Nunca viví algo igual.', name: 'Ginebra D.', detail: 'Cobertura' },
      ],
    },
    contact: {
      submit: 'Enviar por WhatsApp',
      sentTitle: 'Se está abriendo WhatsApp',
      sentText: 'Pulsa "Enviar" en WhatsApp para completar la solicitud. Si no se abrió, usa el botón de abajo.',
      reopen: 'Abrir WhatsApp',
      sendAnother: 'Escribir otro mensaje',
      optional: 'opcional',
      privacy: 'Se abrirá WhatsApp con tu mensaje ya escrito: pulsa "Enviar" para mandarlo. Este sitio no guarda tus datos.',
      whatsappCard: 'WhatsApp',
      whatsappBar: 'Reserva por WhatsApp',
      waMessage: '¡Hola Atelier Noble Ink! Me gustaría reservar una consulta.',
    },
  },

  en: {
    // Verificato su fonti dermatologiche e siti di studi di tatuaggio (vedi README)
    aftercare: {
      "eyebrow": "Aftercare",
      "heroTitle": "Caring for Your Tattoo",
      "heroSubtitle": "Follow these simple steps to ensure a perfect healing process and keep the colors vibrant over time.",
      "introTitle": "The Healing Journey",
      "introText": "Your tattoo deserves the best care. Here is what to do, day by day. If your tattoo artist gives you different instructions, follow them: they come before this guide.",
      "steps": [
        {
          "badge": "Days 1–3",
          "label": "Protection",
          "title": "Protect it with the clear film",
          "desc": "A tattoo is an open wound: we cover it with a special transparent tattoo film that protects it while letting it breathe. It usually stays on for 2–4 days, as your artist will tell you. Some fluid under the film is normal; take it off early if it lifts, leaks, or the skin turns red and irritated."
        },
        {
          "badge": "Days 4–7",
          "label": "Hydration",
          "title": "Remove, wash and moisturize",
          "desc": "Peel the film off slowly, close to the skin, using lukewarm water to help. Wash gently with mild unscented soap, pat dry, and let it air for a few minutes. Then wash twice a day and apply a thin layer of unscented neutral cream: more cream doesn't help."
        },
        {
          "badge": "Weeks 2–3",
          "label": "Peeling",
          "title": "If the skin dries out, let it be",
          "desc": "It doesn't happen to everyone, but the skin may dry out, peel, or form small scabs. That's normal, but don't pick or scratch: let them fall off on their own. Keep moisturizing with a thin layer and wear soft, breathable clothing."
        },
        {
          "badge": "Week 4+",
          "label": "Maturation",
          "title": "Protect and maintain",
          "desc": "The surface heals in about 2–4 weeks, but the deeper layers take a few months. Once healed, protect it from the sun with SPF 50+ and avoid tanning beds. Keep moisturizing your skin."
        }
      ],
      "warningsTitle": "What to Do and What Not to Do",
      "donts": [
        "Do not soak it in water (pool, sea, bathtub) for 2–4 weeks: showering is fine",
        "Do not expose it to direct sun or tanning beds until it is healed",
        "Do not scratch or pick at scabs or dry skin",
        "Do not use alcohol, hydrogen peroxide, or harsh products",
        "Do not wear tight or rough clothing over the tattooed area"
      ],
      "dos": [
        "Always wash your hands before touching the tattoo",
        "Apply cream only with clean fingers and in a thin layer",
        "Use a mild cleanser and an unscented cream, or the products your artist recommends",
        "If the film lifts or leaks, take it off and contact your artist"
      ],
      "faqTitle": "Frequently Asked Questions",
      "faqs": [
        {
          "q": "How long does it take to heal completely?",
          "a": "The surface usually heals in 2–4 weeks, but the deeper layers can take a few months. Everyone heals at their own pace: always follow your tattoo artist's instructions."
        },
        {
          "q": "My skin isn't peeling: is that normal?",
          "a": "Yes. Peeling and scabbing can happen, but not to everyone: it depends on your skin, the area, and the type of tattoo. No peeling doesn't mean poor healing: keep up the same care."
        },
        {
          "q": "Can I exercise after getting a tattoo?",
          "a": "Avoid intense physical activity for at least 4-5 days, as sweat can irritate the skin and cause infections. Light activity like walking is fine after 2 days."
        },
        {
          "q": "Can a tattoo get infected? How do I spot the signs?",
          "a": "Yes, if the right procedures aren't followed. Warning signs: excessive swelling, redness that worsens after 3 days, very hot skin, fever, foul-smelling discharge, intense throbbing pain, spreading red streaks. If a rash appears under the film, take it off right away. Contact your tattoo artist or a doctor."
        },
        {
          "q": "Can I shower?",
          "a": "With the clear film on you can shower with lukewarm water, avoiding direct jets and soaking. Without the film, wash gently without rubbing and pat dry with a clean cloth."
        },
        {
          "q": "Can I use sunscreen on the tattoo?",
          "a": "Yes, but only once the tattoo is fully healed (about 4 weeks); before that, protect it with covering clothing. Then use SPF 50+ to prevent the colors from fading, and reapply every 2 hours if you are in the sun."
        }
      ]
    },
    footer: { credit: 'From your business needs, to custom software solutions', toTop: 'Back to top' },
    nav: { styles: 'Styles' },
    hero: { film: 'Atelier Film', scroll: 'Scroll' },
    film: {
      title: 'Atelier Film',
      soon: 'The film will be available soon.',
      close: 'Close',
    },
    ritual: {
      eyebrow: 'The Experience',
      title: 'Our Ritual in Three Phases',
      subtitle: 'An intimate, carefully curated journey that turns your session into a moment to remember.',
      steps: [
        { title: 'Consultation & Unique Sketch', text: 'A private meeting with your dedicated artist. We study your body and muscle lines and draw a bespoke sketch before we begin.', tag: '100% bespoke' },
        { title: 'Private Session', text: 'Climate-controlled suite, ergonomic chair, music of your choice and artisan infusions. Silence, focus and the highest hygiene.', tag: 'Comfort & Hygiene' },
        { title: 'Aftercare Protocol', text: 'A complimentary care kit, step-by-step instructions and photo check-ups during healing. We never leave you alone.', tag: 'Follow-up included' },
      ],
    },
    styles: {
      eyebrow: 'Styles',
      title: 'Choose Your Visual Current',
      subtitle: 'Every style has its own artist, pace and soul. Discover the one that suits you best.',
      artistLabel: 'Artist',
      focusLabel: 'Ideal for',
      timeLabel: 'Duration',
      cta: 'Request a sketch in this style',
      items: [
        { label: 'Realism', title: 'Realism', desc: 'Portraits and subjects with photographic detail, built with soft black-and-grey gradients.', focus: 'Forearms, calves, sculptural subjects', time: '2–3 sessions', artist: 0 },
        { label: 'Japanese', title: 'Oriental', desc: 'Dragons, waves and symbols of the Japanese tradition, with bold lines and compositions that follow the arm.', focus: 'Arms and legs, sleeves', time: '3–5 sessions', artist: 1 },
        { label: 'Chicano', title: 'Chicano & Lettering', desc: 'Faces, lettering and symbols in black and grey with strong character, between street tradition and portraiture.', focus: 'Forearms, calves', time: '2–3 sessions', artist: 1 },
        { label: 'Fine Line', title: 'Fine Line', desc: 'Delicate strokes and small subjects: suns, animals, phrases and elegant details.', focus: 'Small and medium pieces', time: '1 session (1–3 hours)', artist: 2 },
        { label: 'Floral', title: 'Floral', desc: 'Roses, lilies and flowers drawn along the curve of the body, in black or with a touch of colour.', focus: 'Arms, back, ribs', time: '1–2 sessions', artist: 2 },
      ],
    },
    team: {
      eyebrow: 'The Masters of the Atelier',
      title: 'The hands behind every work',
      roleLabel: ['Founder · Resident Artist', 'Regular Collaborator', 'Resident Artist'],
      members: [
        { name: 'Francesco Parisi', bio: 'Founder of the studio: combines realism and black-and-grey work with great attention to detail.', styles: 'Realism · Black & grey · Lettering', availability: 'Books open' },
        { name: 'Sebastian Velasquez', bio: 'Regular collaborator of the studio: a bold style, between oriental tradition and chicano, with compositions that follow the body.', styles: 'Japanese · Chicano · Lettering', availability: 'Last dates available' },
        { name: 'Chiara Morandi', bio: 'Academically trained botanical illustrator: her signature is an evanescent line, almost engraved.', styles: 'Fine Line · Botanical · Minimalist', availability: 'By invitation only' },
      ],
    },
    gallery: { close: 'Close', prev: 'Previous', next: 'Next', zoom: 'Enlarge' },
    reviews: {
      eyebrow: 'Testimonials',
      title: 'Words from Those Who Wear the Work',
      subtitle: 'A few words from our clients.',
      items: [
        { text: "It wasn't just a tattoo, it was an experience of complete calm. No noise, a place cared for in every detail.", name: 'Beatrice R.', detail: 'First tattoo' },
        { text: "Chiara's precision is astonishing. After 18 months the shading is perfectly intact, identical to day one.", name: 'Lorenzo F.', detail: 'Fine line' },
        { text: 'Impeccable aftercare: you can feel how much they care for the client even after the session. Nothing like it.', name: 'Ginevra D.', detail: 'Cover-up' },
      ],
    },
    contact: {
      submit: 'Send on WhatsApp',
      sentTitle: 'WhatsApp is opening',
      sentText: 'Press "Send" in WhatsApp to complete your request. If it did not open, use the button below.',
      reopen: 'Open WhatsApp',
      sendAnother: 'Write another message',
      optional: 'optional',
      privacy: 'WhatsApp will open with your message already written: press "Send" to deliver it. This site does not store your data.',
      whatsappCard: 'WhatsApp',
      whatsappBar: 'Book on WhatsApp',
      waMessage: "Hi Atelier Noble Ink! I'd like to book a consultation.",
    },
  },

  de: {
    // Verificato su fonti dermatologiche e siti di studi di tatuaggio (vedi README)
    aftercare: {
      "eyebrow": "Nachsorge",
      "heroTitle": "Die Pflege deines Tattoos",
      "heroSubtitle": "Befolge diese einfachen Schritte für eine perfekte Heilung und leuchtende Farben, die lange halten.",
      "introTitle": "Der Heilungsprozess",
      "introText": "Dein Tattoo verdient die beste Pflege. So gehst du Tag für Tag vor. Wenn dein Tätowierer dir andere Anweisungen gibt, befolge diese: Sie gehen dieser Anleitung vor.",
      "steps": [
        {
          "badge": "Tag 1–3",
          "label": "Schutz",
          "title": "Mit der transparenten Folie schützen",
          "desc": "Ein Tattoo ist eine offene Wunde: Wir decken es mit einer speziellen transparenten Tattoo-Folie ab, die es schützt und atmen lässt. Sie bleibt meist 2–4 Tage drauf, so wie dein Tätowierer es sagt. Etwas Flüssigkeit unter der Folie ist normal; entferne sie früher, wenn sie sich löst, ausläuft oder die Haut rot und gereizt wird."
        },
        {
          "badge": "Tag 4–7",
          "label": "Feuchtigkeit",
          "title": "Entfernen, waschen und eincremen",
          "desc": "Ziehe die Folie langsam und hautnah ab, lauwarmes Wasser hilft dabei. Wasche sanft mit milder, parfümfreier Seife, tupfe trocken und lass die Haut ein paar Minuten atmen. Danach 2 Mal täglich waschen und eine dünne Schicht parfümfreie, neutrale Creme auftragen: Mehr Creme hilft nicht."
        },
        {
          "badge": "Woche 2–3",
          "label": "Abschälen",
          "title": "Wenn die Haut trocken wird, lass sie",
          "desc": "Nicht bei jedem passiert es, aber die Haut kann trocken werden, sich schälen oder kleine Krusten bilden. Das ist normal, aber nicht abreißen oder kratzen: Lass sie von selbst abfallen. Weiter mit einer dünnen Schicht eincremen und weiche, atmungsaktive Kleidung tragen."
        },
        {
          "badge": "Woche 4+",
          "label": "Reifung",
          "title": "Schützen und pflegen",
          "desc": "Oberflächlich verheilt das Tattoo in etwa 2–4 Wochen, die tieferen Hautschichten brauchen einige Monate. Nach der Heilung mit LSF 50+ vor Sonne schützen und Solarien meiden. Die Haut weiter eincremen."
        }
      ],
      "warningsTitle": "Was zu tun ist und was nicht",
      "donts": [
        "2–4 Wochen nicht in Wasser tauchen (Pool, Meer, Badewanne): Duschen ist in Ordnung",
        "Bis zur Heilung keiner direkten Sonne oder dem Solarium aussetzen",
        "Krusten oder trockene Haut nicht kratzen oder ablösen",
        "Keinen Alkohol, kein Wasserstoffperoxid oder aggressive Produkte verwenden",
        "Keine enge oder raue Kleidung über der tätowierten Stelle tragen"
      ],
      "dos": [
        "Immer die Hände waschen, bevor du das Tattoo berührst",
        "Creme nur mit sauberen Fingern und dünn auftragen",
        "Ein mildes Reinigungsmittel und eine parfümfreie Creme verwenden oder die Produkte, die dein Tätowierer empfiehlt",
        "Löst sich die Folie oder läuft sie aus, entferne sie und kontaktiere deinen Tätowierer"
      ],
      "faqTitle": "Häufig Gestellte Fragen",
      "faqs": [
        {
          "q": "Wie lange dauert es, bis es vollständig verheilt ist?",
          "a": "Die Oberfläche heilt in der Regel in 2–4 Wochen, die tieferen Schichten können einige Monate brauchen. Jeder heilt in seinem eigenen Tempo: Befolge immer die Anweisungen deines Tätowierers."
        },
        {
          "q": "Meine Haut schält sich nicht: Ist das normal?",
          "a": "Ja. Abschälen und Krusten können auftreten, aber nicht bei jedem: Es hängt von Haut, Körperstelle und Art des Tattoos ab. Wenn sich nichts schält, heilt es nicht schlecht: Pflege einfach weiter wie bisher."
        },
        {
          "q": "Kann ich nach dem Tätowieren Sport treiben?",
          "a": "Vermeide mindestens 4-5 Tage lang intensive körperliche Aktivität, da Schweiß die Haut reizen und Infektionen verursachen kann. Leichte Aktivität wie Gehen ist nach 2 Tagen in Ordnung."
        },
        {
          "q": "Kann sich ein Tattoo infizieren? Wie erkenne ich die Anzeichen?",
          "a": "Ja, wenn die richtigen Vorgehensweisen nicht befolgt werden. Warnzeichen: übermäßige Schwellung, Rötung, die sich nach 3 Tagen verschlimmert, sehr heiße Haut, Fieber, übelriechender Ausfluss, starke pochende Schmerzen, sich ausbreitende rote Streifen. Tritt ein Ausschlag unter der Folie auf, entferne sie sofort. Kontaktiere deinen Tätowierer oder einen Arzt."
        },
        {
          "q": "Kann ich duschen?",
          "a": "Mit der transparenten Folie kannst du mit lauwarmem Wasser duschen, vermeide aber direkten Wasserstrahl und Eintauchen. Ohne Folie vorsichtig waschen, nicht reiben, und mit einem sauberen Tuch trockentupfen."
        },
        {
          "q": "Kann ich Sonnencreme auf dem Tattoo verwenden?",
          "a": "Ja, aber erst wenn das Tattoo vollständig verheilt ist (etwa 4 Wochen); davor mit bedeckender Kleidung schützen. Danach LSF 50+ verwenden, damit die Farben nicht verblassen, und bei Sonne alle 2 Stunden erneut auftragen."
        }
      ]
    },
    footer: { credit: 'Von Ihren Anforderungen zu maßgeschneiderten Lösungen', toTop: 'Zurück nach oben' },
    nav: { styles: 'Stile' },
    hero: { film: 'Atelier-Film', scroll: 'Scrollen' },
    film: {
      title: 'Atelier-Film',
      soon: 'Der Film ist in Kürze verfügbar.',
      close: 'Schließen',
    },
    ritual: {
      eyebrow: 'Das Erlebnis',
      title: 'Unser Ritual in drei Phasen',
      subtitle: 'Ein intimer, liebevoll gestalteter Weg, der Ihre Sitzung zu einem besonderen Moment macht.',
      steps: [
        { title: 'Beratung & Einzigartiger Entwurf', text: 'Privates Treffen mit Ihrem Künstler. Wir studieren Körper und Muskellinien und zeichnen vorab einen maßgeschneiderten Entwurf.', tag: '100 % maßgeschneidert' },
        { title: 'Private Sitzung', text: 'Klimatisierte Suite, ergonomische Liege, Musik nach Wahl und handwerkliche Tees. Ruhe, Konzentration und höchste Hygiene.', tag: 'Komfort & Hygiene' },
        { title: 'Aftercare-Protokoll', text: 'Kostenloses Pflegeset, Anleitung Schritt für Schritt und Foto-Kontrolle während der Heilung. Wir lassen Sie nicht allein.', tag: 'Nachbetreuung inklusive' },
      ],
    },
    styles: {
      eyebrow: 'Stile',
      title: 'Wählen Sie Ihre Bildsprache',
      subtitle: 'Jeder Stil hat seinen Künstler, sein Tempo und seine Seele. Finden Sie den, der zu Ihnen passt.',
      artistLabel: 'Künstler',
      focusLabel: 'Ideal für',
      timeLabel: 'Dauer',
      cta: 'Entwurf in diesem Stil anfragen',
      items: [
        { label: 'Realismus', title: 'Realismus', desc: 'Porträts und Motive mit fotografischem Detail, aus weichen Schwarz-Grau-Verläufen aufgebaut.', focus: 'Unterarme, Waden, skulpturale Motive', time: '2–3 Sitzungen', artist: 0 },
        { label: 'Japanisch', title: 'Orientalisch', desc: 'Drachen, Wellen und Symbole der japanischen Tradition, mit klaren Linien und Kompositionen entlang des Arms.', focus: 'Arme und Beine, Sleeves', time: '3–5 Sitzungen', artist: 1 },
        { label: 'Chicano', title: 'Chicano & Lettering', desc: 'Gesichter, Schriften und Symbole in Schwarz-Grau mit starkem Charakter, zwischen Straßentradition und Porträt.', focus: 'Unterarme, Waden', time: '2–3 Sitzungen', artist: 1 },
        { label: 'Fine Line', title: 'Feine Linie', desc: 'Zarte Striche und kleine Motive: Sonnen, Tiere, Sätze und elegante Details.', focus: 'Kleine und mittlere Motive', time: '1 Sitzung (1–3 Std.)', artist: 2 },
        { label: 'Floral', title: 'Floral', desc: 'Rosen, Lilien und Blumen, entlang der Körperkurve gezeichnet, in Schwarz oder mit einem Hauch Farbe.', focus: 'Arme, Rücken, Rippen', time: '1–2 Sitzungen', artist: 2 },
      ],
    },
    team: {
      eyebrow: 'Die Meister des Ateliers',
      title: 'Die Hände hinter jedem Werk',
      roleLabel: ['Gründer · Resident Artist', 'Fester Mitarbeiter', 'Resident Artist'],
      members: [
        { name: 'Francesco Parisi', bio: 'Gründer des Studios: verbindet Realismus und Schwarz-Grau-Arbeiten mit großer Liebe zum Detail.', styles: 'Realismus · Schwarz-Grau · Lettering', availability: 'Termine frei' },
        { name: 'Sebastian Velasquez', bio: 'Fester Mitarbeiter des Studios: kraftvoller Stil zwischen orientalischer Tradition und Chicano, mit Kompositionen entlang des Körpers.', styles: 'Japanisch · Chicano · Lettering', availability: 'Letzte freie Termine' },
        { name: 'Chiara Morandi', bio: 'Akademisch ausgebildete botanische Illustratorin: Ihre Handschrift ist eine zarte, fast gestochene Linie.', styles: 'Fine Line · Botanisch · Minimalistisch', availability: 'Nur auf Einladung' },
      ],
    },
    gallery: { close: 'Schließen', prev: 'Zurück', next: 'Weiter', zoom: 'Vergrößern' },
    reviews: {
      eyebrow: 'Stimmen',
      title: 'Worte derer, die das Werk tragen',
      subtitle: 'Einige Worte unserer Kunden.',
      items: [
        { text: 'Es war nicht nur ein Tattoo, sondern ein Erlebnis völliger Ruhe. Kein Lärm, ein Ort mit Liebe zum Detail.', name: 'Beatrice R.', detail: 'Erstes Tattoo' },
        { text: 'Chiaras Präzision ist erstaunlich. Nach 18 Monaten sind die Abstufungen perfekt erhalten, wie am ersten Tag.', name: 'Lorenzo F.', detail: 'Fine Line' },
        { text: 'Tadelloses Aftercare: Man spürt die Sorge um den Kunden auch nach der Sitzung. So etwas habe ich noch nie erlebt.', name: 'Ginevra D.', detail: 'Cover-up' },
      ],
    },
    contact: {
      submit: 'Über WhatsApp senden',
      sentTitle: 'WhatsApp öffnet sich',
      sentText: 'Tippe in WhatsApp auf „Senden“, um die Anfrage abzuschließen. Falls es sich nicht geöffnet hat, nutze die Schaltfläche unten.',
      reopen: 'WhatsApp öffnen',
      sendAnother: 'Weitere Nachricht schreiben',
      optional: 'optional',
      privacy: 'WhatsApp öffnet sich mit deiner vorbereiteten Nachricht: Tippe auf „Senden“. Diese Website speichert keine Daten.',
      whatsappCard: 'WhatsApp',
      whatsappBar: 'Per WhatsApp buchen',
      waMessage: 'Hallo Atelier Noble Ink! Ich möchte gern eine Beratung buchen.',
    },
  },
}
