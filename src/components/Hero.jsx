import Logo from './Logo.jsx'
import SubtleDivider from './SubtleDivider.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-ivory bg-marble bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-ink-ivory/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24">
        <Logo className="w-28 h-28 md:w-36 md:h-36 mb-6" color="#000000" />

        <h1 className="font-serif text-3xl md:text-5xl tracking-widest2 uppercase">
          Atelier Noble Ink
        </h1>
        <p className="font-serif text-sm md:base tracking-[0.4em] uppercase text-ink-stone mt-3">
          {t.hero.studio}
        </p>

        <SubtleDivider className="my-8" />

        <p className="font-serif text-lg md:text-2xl max-w-xl text-ink-charcoal italic">
          {t.hero.quote}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contatti"
            className="border border-ink-black px-8 py-3 font-serif text-sm tracking-widest2 uppercase hover:bg-ink-black hover:text-ink-ivory transition-colors"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#galleria"
            className="px-8 py-3 font-serif text-sm tracking-widest2 uppercase text-ink-stone hover:text-ink-gold transition-colors"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      <a
        href="#chi-siamo"
        aria-label="Scorri"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-14 bg-ink-stone/50 animate-pulse"
      />
    </section>
  )
}
