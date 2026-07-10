import SubtleDivider from './SubtleDivider.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="chi-siamo" className="bg-ink-ivory pt-10 pb-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
          {t.about.eyebrow}
        </span>
        <h2 className="font-serif text-2xl md:text-4xl mt-4 mb-8">{t.about.title}</h2>
        <p className="font-serif text-base md:text-lg leading-relaxed text-ink-charcoal">
          {t.about.p1}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          {t.about.values.map((v) => (
            <div key={v.title}>
              <SubtleDivider className="mb-6" />
              <h3 className="font-serif text-lg tracking-wide mb-2">{v.title}</h3>
              <p className="font-serif text-sm text-ink-stone leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
