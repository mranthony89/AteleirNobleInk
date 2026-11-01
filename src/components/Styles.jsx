import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal, { EASE } from '../lib/Reveal.jsx'
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Foto di esempio (le stesse della galleria): stile -> immagine
const STYLE_IMAGES = [
  './gallery/gallery-1.jpg', // fine line
  './gallery/gallery-2.jpg', // blackwork
  './gallery/gallery-3.jpg', // ornamentale
  './gallery/gallery-4.jpg', // realistico
  './gallery/gallery-5.jpg', // botanico
  './gallery/gallery-6.jpg', // geometrico
]
const AVATARS = ['./team/tatuatore-1.jpg', './team/tatuatore-2.jpg', './team/tatuatore-3.jpg']

export default function Styles() {
  const { t } = useLanguage()
  const [[index, dir], setState] = useState([0, 1])
  const items = t.styles.items
  const item = items[index]
  const artist = t.team.members[item.artist]

  const go = (next) => setState([(next + items.length) % items.length, next > index ? 1 : -1])

  return (
    <section id="stili" className="marble-bg py-16 md:py-24 overflow-clip">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.styles.eyebrow} title={t.styles.title} subtitle={t.styles.subtitle} />

        {/* Selettore: scorre in orizzontale su mobile, a capo su desktop */}
        <Reveal className="-mx-6 px-6 md:mx-0 md:px-0">
          <div role="tablist" className="snap-row flex md:flex-wrap md:justify-center gap-2 overflow-x-auto pb-3 md:pb-0">
            {items.map((s, i) => (
              <button
                key={s.label}
                role="tab"
                aria-selected={i === index}
                onClick={() => go(i)}
                className={`relative shrink-0 rounded-xl px-5 py-2.5 font-serif text-xs tracking-widest2 uppercase transition-colors ${
                  i === index ? 'text-ink-black' : 'text-ink-stone hover:text-ink-charcoal bg-white/40 border border-ink-stone/20'
                }`}
              >
                {i === index && (
                  <motion.span
                    layoutId="style-pill"
                    className="absolute inset-0 rounded-xl bg-ink-gold shadow-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Immagine con trascinamento (swipe) su mobile */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[1.25rem] border border-ink-gold/40 pointer-events-none" aria-hidden="true" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft bg-ink-beige">
              <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.img
                  key={index}
                  src={STYLE_IMAGES[index]}
                  alt={item.title}
                  custom={dir}
                  className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                  variants={{
                    enter: (d) => ({ opacity: 0, x: d * 60, scale: 1.08 }),
                    center: { opacity: 1, x: 0, scale: 1 },
                    exit: (d) => ({ opacity: 0, x: d * -60, scale: 0.98 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: EASE }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) go(index + 1)
                    else if (info.offset.x > 60) go(index - 1)
                  }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/55 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-4 font-serif text-xs tracking-widest2 uppercase text-ink-ivory">
                {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Scheda dello stile */}
          <div className="min-h-[22rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="rounded-2xl glass-light p-7 md:p-9 shadow-soft"
              >
                <p className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">{item.label}</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">{item.title}</h3>
                <p className="font-serif text-ink-charcoal leading-relaxed mt-4">{item.desc}</p>

                <dl className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-ink-stone/15">
                  <div>
                    <dt className="font-serif text-[10px] tracking-widest2 uppercase text-ink-stone">{t.styles.focusLabel}</dt>
                    <dd className="font-serif text-sm mt-1">{item.focus}</dd>
                  </div>
                  <div>
                    <dt className="font-serif text-[10px] tracking-widest2 uppercase text-ink-stone">{t.styles.timeLabel}</dt>
                    <dd className="font-serif text-sm mt-1">{item.time}</dd>
                  </div>
                </dl>

                <div className="flex items-center gap-3 mt-6">
                  <img src={AVATARS[item.artist]} alt="" className="w-11 h-11 rounded-full object-cover border border-ink-gold/60" />
                  <div>
                    <p className="font-serif text-[10px] tracking-widest2 uppercase text-ink-stone">{t.styles.artistLabel}</p>
                    <p className="font-serif">{artist.name}</p>
                  </div>
                </div>

                <motion.a
                  href="#contatti"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-7 inline-flex items-center gap-3 rounded-xl border border-ink-black px-6 py-3 font-serif text-xs tracking-widest2 uppercase hover:bg-ink-black hover:text-ink-ivory hover:shadow-gold transition-all"
                >
                  {t.styles.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
