const services = [
  {
    title: 'Tatuaggi Custom',
    desc: 'Progetti unici disegnati insieme al cliente, pensati per raccontare una storia personale.',
  },
  {
    title: 'Fine Line & Dettaglio',
    desc: 'Linee sottili e precise per composizioni eleganti e minimaliste.',
  },
  {
    title: 'Blackwork',
    desc: 'Contrasti decisi e pieni netti, ispirati alla tradizione grafica e scultorea.',
  },
  {
    title: 'Copertura & Restyling',
    desc: 'Trasformiamo tatuaggi esistenti in nuove opere coerenti e curate.',
  },
  {
    title: 'Consulenza Privata',
    desc: 'Un incontro riservato per definire stile, posizionamento e cura del progetto.',
  },
  {
    title: 'Aftercare',
    desc: 'Accompagniamo ogni cliente nella cura del tatuaggio, passo dopo passo.',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="bg-ink-black text-ink-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
            Servizi
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-4">L'arte, su misura</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-charcoal">
          {services.map((s) => (
            <div key={s.title} className="bg-ink-black p-8 hover:bg-ink-charcoal transition-colors">
              <h3 className="font-serif text-lg tracking-wide mb-3 text-ink-gold">{s.title}</h3>
              <p className="font-serif text-sm text-ink-ivory/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
