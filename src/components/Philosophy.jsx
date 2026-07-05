import SubtleDivider from './SubtleDivider.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Philosophy() {
  const { t } = useLanguage()

  return (
    <section id="artisti" className="relative bg-ink-beige py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="font-serif text-xs tracking-widest2 uppercase text-ink-charcoal/60">
          {t.philosophy.eyebrow}
        </span>
        <blockquote className="font-serif text-2xl md:text-4xl italic leading-snug mt-6 text-ink-charcoal">
          {t.philosophy.quote}
        </blockquote>
        <p className="font-serif text-base md:text-lg text-ink-stone leading-relaxed mt-8 max-w-2xl mx-auto">
          {t.philosophy.text}
        </p>

        <SubtleDivider className="my-10" />

        <p className="font-serif text-sm tracking-widest2 uppercase text-ink-charcoal/70">
          {t.philosophy.tag}
        </p>
      </div>
    </section>
  )
}
