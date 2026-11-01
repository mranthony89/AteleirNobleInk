import { createContext, useCallback, useContext, useState } from 'react'

// Segnala quando la pagina di benvenuto (scelta lingua) è chiusa,
// così le animazioni dell'hero partono solo quando l'utente le vede davvero.
export const SESSION_KEY = 'atelier-noble-ink-welcome-shown'

export function welcomeAlreadySeen() {
  try {
    return !!sessionStorage.getItem(SESSION_KEY)
  } catch {
    return false
  }
}

const IntroContext = createContext({ ready: true, markReady: () => {} })

export function IntroProvider({ children }) {
  const [ready, setReady] = useState(welcomeAlreadySeen)
  const markReady = useCallback(() => setReady(true), [])
  return <IntroContext.Provider value={{ ready, markReady }}>{children}</IntroContext.Provider>
}

export const useIntro = () => useContext(IntroContext)
