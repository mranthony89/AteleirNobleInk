import { createContext, useContext, useEffect, useState } from 'react'
import { translations, languages } from './translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'atelier-noble-ink-lang'

function detectDefaultLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && translations[stored]) return stored
  return 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectDefaultLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (code) => {
    if (!translations[code]) return
    localStorage.setItem(STORAGE_KEY, code)
    setLangState(code)
  }

  const value = { lang, setLang, t: translations[lang], languages }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
