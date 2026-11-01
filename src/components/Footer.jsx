import Logo from './Logo.jsx'
import Reveal from '../lib/Reveal.jsx'
import SubtleDivider from './SubtleDivider.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="marble-bg border-t border-ink-stone/20 py-10 pb-28 md:pb-10">
      <Reveal className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-5 text-center">
        <Logo className="w-12 h-12" color="#000000" />
        <p className="font-serif text-sm tracking-widest2 uppercase">Atelier Noble Ink</p>
        <SubtleDivider className="my-1" />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-serif text-sm text-ink-stone">
          <a href="#chi-siamo" className="hover:text-ink-gold transition-colors">{t.nav.about}</a>
          <a href="#stili" className="hover:text-ink-gold transition-colors">{t.nav.styles}</a>
          <a href="#servizi" className="hover:text-ink-gold transition-colors">{t.nav.team}</a>
          <a href="#galleria" className="hover:text-ink-gold transition-colors">{t.nav.gallery}</a>
          <a href="#cura-tatuaggio" className="hover:text-ink-gold transition-colors">{t.nav.aftercare}</a>
          <a href="#contatti" className="hover:text-ink-gold transition-colors">{t.nav.contact}</a>
        </div>

        <p className="font-serif text-xs text-ink-stone/70">
          © {new Date().getFullYear()} Atelier Noble Ink Tattoo Studio. {t.footer.rights}
        </p>

        <a
          href="https://www.proiettihouse.org"
          target="_blank"
          rel="noopener"
          className="group inline-flex flex-col md:flex-row items-center text-center gap-0 md:gap-2 font-serif text-[11px] text-ink-stone/80 hover:text-ink-gold transition-colors"
        >
          <span className="font-semibold text-ink-stone group-hover:text-ink-gold transition-colors">ProiettiHouse.org</span>
          <span className="hidden md:inline text-ink-stone/40" aria-hidden="true">|</span>
          <span>{t.footer.credit}</span>
        </a>
      </Reveal>
    </footer>
  )
}
