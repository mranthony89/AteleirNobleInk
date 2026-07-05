export default function About() {
  return (
    <section id="chi-siamo" className="bg-ink-ivory py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
          Chi Siamo
        </span>
        <h2 className="font-serif text-2xl md:text-4xl mt-4 mb-8">
          Più di uno studio di tatuaggi
        </h2>
        <p className="font-serif text-base md:text-lg leading-relaxed text-ink-charcoal">
          Atelier Noble Ink è un luogo dove l'arte si incontra con la pelle, la storia si
          incontra con l'identità e ogni tatuaggio si trasforma in un'opera senza tempo.
        </p>
        <p className="font-serif text-base md:text-lg leading-relaxed text-ink-stone mt-6">
          Fondato sulla precisione, la discrezione e il rispetto per il mestiere, il nostro
          atelier accoglie chi cerca un tatuaggio pensato con cura — non semplicemente
          disegnato, ma vissuto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          {[
            { title: 'Sofisticato', text: 'Parliamo con eleganza e rispetto per l’arte e per il cliente.' },
            { title: 'Autentico', text: 'Comunichiamo la nostra passione e la nostra esperienza.' },
            { title: 'Personale', text: 'Ogni tatuaggio ha una storia, ogni cliente è unico.' },
          ].map((v) => (
            <div key={v.title} className="border-t border-ink-gold pt-6">
              <h3 className="font-serif text-lg tracking-wide mb-2">{v.title}</h3>
              <p className="font-serif text-sm text-ink-stone leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
