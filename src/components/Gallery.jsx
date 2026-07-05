import { useLanguage } from '../i18n/LanguageContext.jsx'

const styles = [
  'from-ink-stone/20 via-ink-beige to-ink-ivory',
  'from-ink-black via-ink-charcoal to-ink-stone',
  'from-ink-beige via-ink-ivory to-ink-gold/40',
  'from-ink-charcoal via-ink-stone to-ink-beige',
  'from-ink-ivory via-ink-beige to-ink-stone/30',
  'from-ink-black via-ink-stone to-ink-gold/30',
]

export default function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="galleria" className="bg-ink-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
            {t.gallery.eyebrow}
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-4">{t.gallery.title}</h2>
          <p className="font-serif text-ink-stone mt-4 max-w-xl mx-auto">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.gallery.pieces.map((label, i) => (
            <div
              key={label}
              className={`aspect-square bg-gradient-to-br ${styles[i]} border border-ink-stone/20 flex items-end p-5 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-ink-black/30" />
              <span className="relative font-serif text-sm tracking-widest2 uppercase text-ink-charcoal group-hover:text-ink-ivory transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center font-serif text-xs text-ink-stone mt-8 tracking-wide">
          {t.gallery.footnote}
        </p>
      </div>
    </section>
  )
}
