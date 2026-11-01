import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal, { EASE } from '../lib/Reveal.jsx'
import { ChevronIcon, CloseIcon } from './Icons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const photos = [
  './gallery/gallery-1.jpg',
  './gallery/gallery-2.jpg',
  './gallery/gallery-3.jpg',
  './gallery/gallery-4.jpg',
  './gallery/gallery-5.jpg',
  './gallery/gallery-6.jpg',
]

// Mosaico: la prima e l'ultima cella sono più grandi (variazione di ritmo)
const CELL = [
  'col-span-2 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
  'aspect-square',
  'aspect-square',
  'aspect-square',
  'aspect-square',
  'col-span-2 md:col-span-1 aspect-[2/1] md:aspect-square',
]

export default function Gallery() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(null) // indice della foto aperta

  const pieces = t.gallery.pieces
  const prev = useCallback(() => setOpen((i) => (i + photos.length - 1) % photos.length), [])
  const next = useCallback(() => setOpen((i) => (i + 1) % photos.length), [])

  useEffect(() => {
    if (open === null) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, prev, next])

  return (
    <section id="galleria" className="marble-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {pieces.map((label, i) => (
            <Reveal key={label} delay={(i % 3) * 0.08} y={36} className={CELL[i]}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`${t.gallery.zoom}: ${label}`}
                className="group relative block w-full h-full rounded-2xl overflow-hidden border border-ink-stone/20 shadow-soft text-left"
              >
                <img
                  src={photos[i]}
                  alt={label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/75 via-ink-black/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 rounded-2xl ring-0 ring-inset ring-ink-gold/0 group-hover:ring-1 group-hover:ring-ink-gold/70 transition-all duration-500" aria-hidden="true" />
                <span className="absolute left-4 bottom-4 right-4 font-serif text-xs md:text-sm tracking-widest2 uppercase text-ink-ivory translate-y-1 group-hover:-translate-y-0.5 transition-transform duration-500">
                  <span className="block w-6 h-px bg-ink-gold mb-2 transition-all duration-500 group-hover:w-12" />
                  {label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="text-center font-serif text-xs text-ink-stone mt-10 tracking-wide">
          {t.gallery.footnote}
        </Reveal>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={pieces[open]}
          >
            <motion.figure
              key={open}
              className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next()
                else if (info.offset.x > 80) prev()
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[open]}
                alt={pieces[open]}
                draggable="false"
                className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain border border-ink-gold/30 shadow-gold-lg"
              />
              <figcaption className="mt-4 font-serif text-xs tracking-widest2 uppercase text-ink-ivory">
                {pieces[open]} · {open + 1}/{photos.length}
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => { e.stopPropagation(); setOpen(null) }}
              aria-label={t.gallery.close}
              autoFocus
              className="absolute top-4 right-4 w-11 h-11 rounded-full border border-ink-gold/50 text-ink-ivory flex items-center justify-center hover:bg-ink-gold hover:text-ink-black transition-colors"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label={t.gallery.prev}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-ink-gold/50 text-ink-ivory flex items-center justify-center hover:bg-ink-gold hover:text-ink-black transition-colors"
            >
              <ChevronIcon dir="left" className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label={t.gallery.next}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-ink-gold/50 text-ink-ivory flex items-center justify-center hover:bg-ink-gold hover:text-ink-black transition-colors"
            >
              <ChevronIcon className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
