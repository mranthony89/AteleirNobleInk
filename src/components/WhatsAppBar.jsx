import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { WhatsAppIcon } from './Icons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { whatsappUrl } from '../config.js'

// Mobile: barra fissa in basso. Desktop: pulsante circolare con etichetta al passaggio.
export default function WhatsAppBar() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.a
            key="wa-mobile"
            href={whatsappUrl(t.contact.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed z-40 inset-x-4 bottom-4 flex items-center justify-center gap-3 rounded-2xl bg-ink-black/95 backdrop-blur-md border border-ink-gold text-ink-gold px-6 py-3.5 font-serif text-sm tracking-widest2 uppercase shadow-gold-lg"
            style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            {t.contact.whatsappBar}
          </motion.a>

          <motion.a
            key="wa-desktop"
            href={whatsappUrl(t.contact.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.contact.whatsappBar}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.06 }}
            className="group hidden md:flex fixed z-40 bottom-6 right-6 h-12 items-center gap-0 rounded-full bg-ink-black border border-ink-gold text-ink-gold shadow-gold-lg overflow-hidden"
          >
            <span className="flex w-12 h-12 items-center justify-center shrink-0">
              <WhatsAppIcon className="w-5 h-5" />
            </span>
            <span className="max-w-0 group-hover:max-w-[16rem] overflow-hidden whitespace-nowrap font-serif text-xs tracking-widest2 uppercase transition-all duration-500 group-hover:pr-5">
              {t.contact.whatsappBar}
            </span>
          </motion.a>
        </>
      )}
    </AnimatePresence>
  )
}
