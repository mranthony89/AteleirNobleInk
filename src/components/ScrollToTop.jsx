import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Torna in cima alla pagina"
      className={`fixed bottom-6 left-6 z-40 w-12 h-12 flex items-center justify-center rounded-full border border-ink-gold bg-ink-ivory/90 backdrop-blur-sm text-ink-charcoal shadow-md transition-all duration-300 hover:bg-ink-gold hover:text-ink-black ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
