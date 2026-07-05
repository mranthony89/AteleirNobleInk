import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink-ivory border-t border-ink-stone/20 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <Logo className="w-10 h-10" color="#000000" />
        <p className="font-serif text-sm tracking-widest2 uppercase">Atelier Noble Ink</p>

        <div className="flex gap-6 font-serif text-sm text-ink-stone">
          <a href="#chi-siamo" className="hover:text-ink-gold transition-colors">Chi Siamo</a>
          <a href="#servizi" className="hover:text-ink-gold transition-colors">Servizi</a>
          <a href="#galleria" className="hover:text-ink-gold transition-colors">Galleria</a>
          <a href="#contatti" className="hover:text-ink-gold transition-colors">Contatti</a>
        </div>

        <p className="font-serif text-xs text-ink-stone/70">
          © {new Date().getFullYear()} Atelier Noble Ink Tattoo Studio. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
