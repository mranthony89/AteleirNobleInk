import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CloseIcon, PlayIcon } from './Icons.jsx'
import Logo from './Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { FILM_POSTER, FILM_SRC } from '../config.js'

// Modale del "Film d'Atelier". Se il file video non esiste ancora mostra un segnaposto elegante:
// basta caricare public/video/atelier-film.mp4 per attivarlo.
export default function VideoModal({ open, onClose }) {
  const { t } = useLanguage()
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-black/85 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={t.film.title}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-ink-gold/30 bg-ink-black shadow-gold-lg"
            initial={{ scale: 0.92, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 12, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {!missing ? (
              <video
                className="w-full h-full object-cover"
                src={FILM_SRC}
                poster={FILM_POSTER}
                controls
                autoPlay
                playsInline
                onError={() => setMissing(true)}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-5 text-center px-6 text-ink-ivory">
                <img src={FILM_POSTER} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
                <div className="relative flex flex-col items-center gap-2 sm:gap-5">
                  <Logo className="w-12 h-12 sm:w-20 sm:h-20" color="#DAAF37" />
                  <span className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full border border-ink-gold text-ink-gold">
                    <PlayIcon className="w-4 h-4 ml-0.5" />
                  </span>
                  <p className="font-serif tracking-widest2 uppercase text-xs sm:text-sm">{t.film.title}</p>
                  <p className="font-serif italic text-sm sm:text-base text-ink-ivory/70">{t.film.soon}</p>
                </div>
              </div>
            )}
            <button
              onClick={onClose}
              aria-label={t.film.close}
              autoFocus
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-ink-black/60 border border-ink-gold/50 text-ink-ivory flex items-center justify-center hover:bg-ink-gold hover:text-ink-black transition-colors"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
