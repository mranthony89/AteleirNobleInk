import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Logo from './Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { EASE } from '../lib/Reveal.jsx'

const SECTION_IDS = ['chi-siamo', 'stili', 'servizi', 'galleria', 'cura-tatuaggio', 'contatti']

export default function Navbar() {
  const { t, lang, setLang, languages } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  const links = [
    { href: 'chi-siamo', label: t.nav.about },
    { href: 'stili', label: t.nav.styles },
    { href: 'servizi', label: t.nav.team },
    { href: 'galleria', label: t.nav.gallery },
    { href: 'cura-tatuaggio', label: t.nav.aftercare },
    { href: 'contatti', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Evidenzia la voce della sezione visibile
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Blocca lo scroll con il menu aperto + chiusura con ESC
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const bg = scrolled || open ? 'bg-ink-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(90,90,90,0.15)]' : 'bg-transparent'

  return (
    <>
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${bg}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 gap-4">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-3 text-left shrink-0">
          <Logo className="w-9 h-9 md:w-10 md:h-10 shrink-0" color="#000000" />
          <span className="flex flex-col leading-tight">
            <span className="font-display font-semibold tracking-widest2 text-sm md:text-base uppercase">Atelier Noble Ink</span>
            <span className="font-serif tracking-[0.3em] text-[9px] md:text-[10px] uppercase text-ink-stone">
              Tattoo Studio
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-serif text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={`#${l.href}`}
                className={`py-1 transition-colors hover:text-ink-gold ${active === l.href ? 'text-ink-gold' : ''}`}
              >
                {l.label}
              </a>
              {active === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink-gold"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div
            role="group"
            aria-label="Language"
            className="flex items-center gap-0.5 rounded-xl border border-ink-charcoal/30 bg-white/70 backdrop-blur-sm p-0.5 shadow-sm font-serif"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-label={l.label}
                aria-pressed={lang === l.code}
                className={`uppercase rounded-lg px-2.5 py-1.5 text-xs font-semibold tracking-widest2 transition-all ${
                  lang === l.code
                    ? 'bg-ink-gold text-ink-black shadow-gold'
                    : 'text-ink-charcoal hover:bg-ink-black/5'
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
          <a
            href="#contatti"
            className="rounded-xl border border-ink-black px-5 py-2 font-serif text-sm tracking-wide hover:bg-ink-black hover:text-ink-ivory hover:shadow-gold transition-all"
          >
            {t.nav.book}
          </a>
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            className="absolute w-6 h-px bg-ink-black"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
          />
          <motion.span className="absolute w-6 h-px bg-ink-black" animate={{ opacity: open ? 0 : 1 }} />
          <motion.span
            className="absolute w-6 h-px bg-ink-black"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
          />
        </button>
      </nav>

      {/* Barra di avanzamento dorata */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-px bg-ink-gold origin-left"
      />

    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 marble-bg overflow-y-auto"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <ul className="flex flex-col items-center justify-center gap-6 px-6 py-10 min-h-full font-serif text-xl tracking-widest2 uppercase text-center">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.6, ease: EASE }}
                >
                  <a href={`#${l.href}`} onClick={() => setOpen(false)} className={active === l.href ? 'text-ink-gold' : ''}>
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + links.length * 0.06, duration: 0.6, ease: EASE }}
              >
                <a
                  href="#contatti"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-xl border border-ink-gold text-ink-gold px-8 py-3 text-base shadow-gold"
                >
                  {t.nav.book}
                </a>
              </motion.li>
              <motion.li
                className="flex gap-3 pt-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    aria-label={l.label}
                    className={`uppercase w-12 h-12 rounded-xl border text-sm font-semibold tracking-widest2 transition-colors ${
                      lang === l.code ? 'border-ink-gold bg-ink-gold text-ink-black shadow-gold' : 'border-ink-charcoal/40 bg-white/60 text-ink-charcoal'
                    }`}
                  >
                    {l.code}
                  </button>
                ))}
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
