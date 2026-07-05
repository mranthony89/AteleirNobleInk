import Logo from './Logo.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-ink-ivory border-t border-ink-stone/20 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <Logo className="w-10 h-10" color="#000000" />
        <p className="font-serif text-sm tracking-widest2 uppercase">Atelier Noble Ink</p>

        <div className="flex gap-6 font-serif text-sm text-ink-stone">
          <a href="#chi-siamo" className="hover:text-ink-gold transition-colors">{t.nav.about}</a>
          <a href="#servizi" className="hover:text-ink-gold transition-colors">{t.nav.services}</a>
          <a href="#galleria" className="hover:text-ink-gold transition-colors">{t.nav.gallery}</a>
          <a href="#contatti" className="hover:text-ink-gold transition-colors">{t.nav.contact}</a>
        </div>

        <p className="font-serif text-xs text-ink-stone/70">
          © {new Date().getFullYear()} Atelier Noble Ink Tattoo Studio. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
