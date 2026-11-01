import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Pulsante "torna su" (portato dal sito ProiettiHouse/LavaDeMar, colori adattati all'oro):
// - compare dopo 480px di scroll con un rimbalzo elastico
// - l'anello attorno mostra a che punto della pagina sei (si colora mentre scorri)
// - al passaggio del mouse ha l'alone luminoso "wave-glow"
// - al click la freccia parte verso l'alto e rientra dal basso
const SHOW_AT = 480
const REST = '0 4px 16px rgba(0, 0, 0, 0.25)'
const GLOW = '0 10px 32px rgba(218, 175, 55, 0.55), 0 0 20px rgba(218, 175, 55, 0.4)'

export default function ScrollToTop() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const arrowRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 })

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AT)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    if (!reduce && arrowRef.current) {
      animate(
        arrowRef.current,
        { y: [0, -22, 22, 0], opacity: [1, 0, 0, 1] },
        { duration: 0.6, times: [0, 0.45, 0.46, 1], ease: 'easeOut' },
      )
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label={t.footer.toTop}
          initial={{ opacity: 0, y: 16, scale: 0.6, boxShadow: REST }}
          animate={{ opacity: 1, y: 0, scale: 1, boxShadow: REST }}
          exit={{ opacity: 0, y: 16, scale: 0.6, transition: { duration: 0.25, ease: 'easeIn' } }}
          whileHover={{ boxShadow: GLOW, transition: { duration: 0.35 } }}
          transition={{ type: 'spring', stiffness: 380, damping: 17 }}
          // su mobile sta sopra la barra WhatsApp
          className="group fixed bottom-24 md:bottom-6 left-4 md:left-6 z-40 w-12 h-12 rounded-full bg-ink-black text-ink-gold flex items-center justify-center hover:bg-ink-gold hover:text-ink-black transition-colors"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeOpacity=".22" strokeWidth="2" />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="#f8ca50"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
              className="group-hover:[stroke:#000]"
            />
          </svg>
          <span ref={arrowRef} className="relative flex">
            <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" aria-hidden="true">
              <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
