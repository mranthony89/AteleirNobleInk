import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import SubtleDivider from './SubtleDivider.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const SESSION_KEY = 'atelier-noble-ink-welcome-shown'

export default function WelcomeOverlay() {
  const { lang, setLang, t, languages } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleEnter = (code) => {
    if (code) setLang(code)
    sessionStorage.setItem(SESSION_KEY, '1')
    setClosing(true)
    document.body.style.overflow = ''
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center marble-bg px-6 transition-opacity duration-400 ${
        closing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Selezione lingua"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        <Logo className="w-20 h-20 md:w-24 md:h-24 mb-6" color="#000000" />

        <h2 className="font-serif text-xl md:text-2xl tracking-wide text-ink-charcoal">
          {t.welcome.title}
        </h2>
        <p className="font-serif text-sm md:text-base text-ink-stone mt-3 leading-relaxed max-w-sm">
          {t.welcome.subtitle}
        </p>

        <SubtleDivider className="my-8" />

        <p className="font-serif text-xs tracking-widest2 uppercase text-ink-gold mb-5">
          {t.welcome.choose}
        </p>

        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleEnter(l.code)}
              className={`flex items-center justify-center gap-2 border px-4 py-3 font-serif text-sm tracking-wide transition-colors ${
                lang === l.code
                  ? 'border-ink-gold bg-ink-gold/10 text-ink-charcoal'
                  : 'border-ink-stone/40 text-ink-stone hover:border-ink-gold hover:text-ink-charcoal'
              }`}
            >
              <span className="text-lg" aria-hidden="true">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleEnter(null)}
          className="mt-9 font-serif text-xs tracking-widest2 uppercase text-ink-stone/70 hover:text-ink-gold transition-colors underline underline-offset-4"
        >
          {t.welcome.enter}
        </button>
      </div>
    </div>
  )
}
