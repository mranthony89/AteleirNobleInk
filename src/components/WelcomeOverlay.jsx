import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedLogo } from './Logo.jsx'
import SubtleDivider from './SubtleDivider.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SESSION_KEY, useIntro, welcomeAlreadySeen } from '../lib/IntroContext.jsx'
import { EASE } from '../lib/Reveal.jsx'

export default function WelcomeOverlay() {
  const { lang, setLang, t, languages } = useLanguage()
  const { markReady } = useIntro()
  const [visible, setVisible] = useState(() => !welcomeAlreadySeen())

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  const handleEnter = (code) => {
    if (code) setLang(code)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      /* navigazione privata: ignora */
    }
    setVisible(false)
  }

  const fade = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <AnimatePresence onExitComplete={markReady}>
      {visible && (
        <motion.div
          key="welcome"
          className="fixed inset-0 z-[100] flex items-center justify-center marble-bg px-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Selezione lingua"
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full py-8">
            <AnimatedLogo
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-[20rem] md:h-[20rem] mb-8"
              color="#000000"
              duration={2.4}
              delay={0.2}
            />

            <motion.h2
              {...fade(1.2)}
              className="font-serif text-3xl md:text-5xl tracking-widest2 uppercase text-ink-charcoal"
            >
              Atelier Noble Ink
            </motion.h2>
            <motion.p
              {...fade(1.4)}
              className="font-serif text-sm md:text-base tracking-[0.4em] uppercase text-ink-stone mt-3"
            >
              {t.hero.studio}
            </motion.p>

            <SubtleDivider className="my-8" delay={1.5} />

            <motion.p {...fade(1.7)} className="font-serif text-2xl md:text-3xl italic text-ink-charcoal mb-8">
              {t.welcome.hello}
            </motion.p>

            <motion.p {...fade(1.85)} className="font-serif text-xs tracking-widest2 uppercase text-ink-gold mb-5">
              {t.welcome.choose}
            </motion.p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {languages.map((l, i) => (
                <motion.button
                  key={l.code}
                  {...fade(2 + i * 0.08)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleEnter(l.code)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-serif text-sm tracking-wide bg-white/40 backdrop-blur-sm transition-colors hover:shadow-gold ${
                    lang === l.code
                      ? 'border-ink-gold bg-ink-gold/10 text-ink-charcoal'
                      : 'border-ink-stone/40 text-ink-stone hover:border-ink-gold hover:text-ink-charcoal'
                  }`}
                >
                  <span className="text-lg" aria-hidden="true">{l.flag}</span>
                  {l.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              {...fade(2.4)}
              onClick={() => handleEnter(null)}
              className="mt-9 font-serif text-xs tracking-widest2 uppercase text-ink-stone/70 hover:text-ink-gold transition-colors underline underline-offset-4"
            >
              {t.welcome.enter}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
