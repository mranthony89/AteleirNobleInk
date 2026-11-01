import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { AnimatedLogo } from './Logo.jsx'
import Logo from './Logo.jsx'
import SubtleDivider from './SubtleDivider.jsx'
import { PlayIcon } from './Icons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useIntro } from '../lib/IntroContext.jsx'
import { EASE } from '../lib/Reveal.jsx'

// Polvere d'oro: richiama le venature del marmo (posizioni fisse, nessun random a runtime)
const DUST = [
  { l: '8%', t: '22%', s: 3, d: 7, o: 0 }, { l: '16%', t: '68%', s: 2, d: 9, o: 1.2 },
  { l: '24%', t: '40%', s: 4, d: 8, o: 2.1 }, { l: '33%', t: '82%', s: 2, d: 10, o: 0.6 },
  { l: '44%', t: '14%', s: 3, d: 9, o: 3 }, { l: '58%', t: '76%', s: 3, d: 8, o: 1.6 },
  { l: '67%', t: '30%', s: 2, d: 11, o: 2.6 }, { l: '76%', t: '58%', s: 4, d: 7, o: 0.3 },
  { l: '84%', t: '20%', s: 3, d: 9, o: 1.9 }, { l: '91%', t: '72%', s: 2, d: 10, o: 3.4 },
  { l: '52%', t: '46%', s: 2, d: 12, o: 2.3 }, { l: '12%', t: '48%', s: 2, d: 11, o: 0.9 },
]

const TITLE_WORDS = ['Atelier', 'Noble', 'Ink']

export default function Hero({ onOpenFilm }) {
  const { t } = useLanguage()
  const { ready } = useIntro()
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const markY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const markScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const state = ready ? 'show' : 'hide'
  const item = (delay) => ({
    initial: 'hide',
    animate: state,
    variants: { hide: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  let letterIndex = 0

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-clip marble-bg"
    >
      {/* Filigrana: il marchio ingigantito scorre piano con lo scroll */}
      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { y: markY, scale: markScale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="ink-breathe opacity-[0.035]">
          <Logo className="w-[120vmin] h-[120vmin] md:w-[90vmin] md:h-[90vmin]" color="#000000" />
        </div>
      </motion.div>

      {/* Macchie d'inchiostro sfocate */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="ink-breathe absolute -top-24 -left-24 w-[46vmax] h-[46vmax] rounded-full bg-ink-charcoal/[0.06] blur-3xl" />
        <div
          className="ink-breathe absolute -bottom-32 -right-24 w-[40vmax] h-[40vmax] rounded-full bg-ink-gold/[0.12] blur-3xl"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      {/* Polvere d'oro */}
      {!reduce && (
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {DUST.map((p, i) => (
            <motion.span
              key={i}
              className={`absolute rounded-full bg-ink-gold ${i > 7 ? 'hidden md:block' : ''}`}
              style={{ left: p.l, top: p.t, width: p.s, height: p.s, boxShadow: '0 0 10px 2px rgba(218,175,55,0.5)' }}
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: [0, 0.9, 0], y: [0, -34, -60] } : { opacity: 0 }}
              transition={{ duration: p.d, delay: 1.5 + p.o, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-24"
      >
        <AnimatedLogo
          className="w-28 h-28 md:w-36 md:h-36 mb-6"
          color="#000000"
          play={ready}
          duration={2.2}
        />

        <h1 className="font-serif text-3xl md:text-5xl tracking-widest2 uppercase" aria-label="Atelier Noble Ink">
          {TITLE_WORDS.map((word, wi) => (
            <span key={word} className="inline-block whitespace-nowrap mr-[0.55em] last:mr-0" aria-hidden="true">
              {word.split('').map((ch) => {
                const i = letterIndex++
                return (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                    animate={ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
                    transition={{ duration: 0.8, delay: 1.5 + i * 0.045, ease: EASE }}
                  >
                    {ch}
                  </motion.span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.p
          {...item(2.4)}
          className="font-serif text-sm md:text-base tracking-[0.4em] uppercase text-ink-stone mt-3"
        >
          {t.hero.studio}
        </motion.p>

        <SubtleDivider className="my-8" delay={2.5} active={ready} />

        <motion.p {...item(2.7)} className="font-serif text-lg md:text-2xl max-w-xl text-ink-charcoal italic">
          {t.hero.quote}
        </motion.p>

        <motion.div {...item(2.9)} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="#contatti"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-ink-black px-8 py-3 font-serif text-sm tracking-widest2 uppercase bg-white/30 backdrop-blur-sm hover:bg-ink-black hover:text-ink-ivory hover:shadow-gold transition-all duration-300"
          >
            {t.hero.cta1}
          </motion.a>
          <button
            type="button"
            onClick={onOpenFilm}
            className="group inline-flex items-center gap-3 rounded-xl px-6 py-3 font-serif text-sm tracking-widest2 uppercase text-ink-charcoal hover:text-ink-gold transition-colors"
          >
            <span className="relative flex w-9 h-9 items-center justify-center rounded-full border border-ink-gold text-ink-gold group-hover:bg-ink-gold group-hover:text-ink-black group-hover:shadow-gold transition-all">
              <PlayIcon className="w-3.5 h-3.5 ml-0.5" />
              <span className="absolute inset-0 rounded-full border border-ink-gold/60 animate-ping" aria-hidden="true" />
            </span>
            {t.hero.film}
          </button>
        </motion.div>

        <motion.a
          {...item(3.1)}
          href="#cura-tatuaggio"
          className="mt-6 font-serif text-xs tracking-widest2 uppercase text-ink-stone hover:text-ink-gold transition-colors"
        >
          {t.hero.cta2}
        </motion.a>
      </motion.div>

      {/* Indicatore di scroll: una goccia d'oro scende lungo la linea */}
      <a
        href="#chi-siamo"
        aria-label={t.hero.scroll}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 h-14 w-px bg-ink-stone/30 overflow-hidden"
      >
        {!reduce && (
          <motion.span
            className="block w-px h-5 bg-gradient-to-b from-transparent via-ink-gold to-transparent"
            animate={{ y: [-20, 60] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </a>
    </section>
  )
}
