const pieces = [
  { label: 'Fine Line', style: 'from-ink-stone/20 via-ink-beige to-ink-ivory' },
  { label: 'Blackwork', style: 'from-ink-black via-ink-charcoal to-ink-stone' },
  { label: 'Ornamentale', style: 'from-ink-beige via-ink-ivory to-ink-gold/40' },
  { label: 'Ritratto', style: 'from-ink-charcoal via-ink-stone to-ink-beige' },
  { label: 'Botanico', style: 'from-ink-ivory via-ink-beige to-ink-stone/30' },
  { label: 'Geometrico', style: 'from-ink-black via-ink-stone to-ink-gold/30' },
]

export default function Gallery() {
  return (
    <section id="galleria" className="bg-ink-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
            Galleria
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-4">Opere Selezionate</h2>
          <p className="font-serif text-ink-stone mt-4 max-w-xl mx-auto">
            Immagini autentiche, dettagli di materiali, atmosfera sofisticata — colori
            desaturati, tonalità calde e naturali.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pieces.map((p) => (
            <div
              key={p.label}
              className={`aspect-square bg-gradient-to-br ${p.style} border border-ink-stone/20 flex items-end p-5 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-ink-black/30" />
              <span className="relative font-serif text-sm tracking-widest2 uppercase text-ink-charcoal group-hover:text-ink-ivory transition-colors">
                {p.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center font-serif text-xs text-ink-stone mt-8 tracking-wide">
          Portfolio completo disponibile su richiesta in studio e sui nostri canali social.
        </p>
      </div>
    </section>
  )
}
