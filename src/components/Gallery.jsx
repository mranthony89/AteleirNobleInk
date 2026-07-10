import { useLanguage } from '../i18n/LanguageContext.jsx'

const photos = [
  '/gallery/gallery-1.jpg',
  '/gallery/gallery-2.jpg',
  '/gallery/gallery-3.jpg',
  '/gallery/gallery-4.jpg',
  '/gallery/gallery-5.jpg',
  '/gallery/gallery-6.jpg',
]

export default function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="galleria" className="marble-bg py-24 md:py-32">
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
              className="aspect-square border border-ink-stone/20 flex items-end p-5 group relative overflow-hidden"
            >
              <img
                src={photos[i]}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 via-ink-black/10 to-transparent group-hover:from-ink-black/85 transition-colors" />
              <span className="relative font-serif text-sm tracking-widest2 uppercase text-ink-ivory">
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
