import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#artisti', label: 'Filosofia' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-ivory/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(90,90,90,0.15)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="w-10 h-10" color="#000000" />
          <span className="font-serif tracking-widest2 text-sm md:text-base">
            ATELIER NOBLE INK
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 font-serif text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contatti"
          className="hidden md:inline-block border border-ink-black px-5 py-2 font-serif text-sm tracking-wide hover:bg-ink-black hover:text-ink-ivory transition-colors"
        >
          Prenota
        </a>

        <button
          aria-label="Apri menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-6 h-px bg-ink-black" />
          <span className="w-6 h-px bg-ink-black" />
          <span className="w-6 h-px bg-ink-black" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-ivory border-t border-ink-stone/20">
          <ul className="flex flex-col px-6 py-4 gap-4 font-serif text-sm tracking-wide">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contatti" onClick={() => setOpen(false)} className="text-ink-gold">
                Prenota
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
