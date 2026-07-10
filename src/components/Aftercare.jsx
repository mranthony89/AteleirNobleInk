import { useState } from 'react'
import SubtleDivider from './SubtleDivider.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const STEP_IMAGES = [
  './aftercare/step-1.jpg',
  './aftercare/step-2.jpg',
  './aftercare/step-3.jpg',
  './aftercare/step-4.jpg',
]

export default function Aftercare() {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="cura-tatuaggio" className="bg-ink-ivory py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
            {t.aftercare.eyebrow}
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-4">{t.aftercare.heroTitle}</h2>
          <p className="font-serif text-ink-stone mt-4 max-w-xl mx-auto">{t.aftercare.heroSubtitle}</p>
        </div>

        <div className="text-center mb-8">
          <SubtleDivider className="mb-6" />
          <h3 className="font-serif text-lg md:text-xl tracking-wide mb-2">{t.aftercare.introTitle}</h3>
          <p className="font-serif text-sm text-ink-stone">{t.aftercare.introText}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {t.aftercare.steps.map((step, i) => (
            <div key={step.title} className="border border-ink-stone/20 bg-white/40 overflow-hidden">
              <div className="relative h-44">
                <img src={STEP_IMAGES[i]} alt={step.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-ink-gold/90 text-ink-black text-xs font-serif tracking-wide px-3 py-1 rounded-full">
                  {step.badge}
                </span>
              </div>
              <div className="p-6">
                <p className="font-serif text-xs tracking-widest2 uppercase text-ink-gold mb-2">{step.label}</p>
                <h4 className="font-serif text-lg mb-2">{step.title}</h4>
                <p className="font-serif text-sm text-ink-stone leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-stone/20 pt-8 mb-10">
          <h3 className="font-serif text-lg md:text-xl tracking-wide text-center mb-6">
            {t.aftercare.warningsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {t.aftercare.donts.map((item) => (
                <li key={item} className="flex items-start gap-3 font-serif text-sm text-ink-charcoal">
                  <span className="text-ink-stone mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {t.aftercare.dos.map((item) => (
                <li key={item} className="flex items-start gap-3 font-serif text-sm text-ink-charcoal">
                  <span className="text-ink-gold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-stone/20 pt-8">
          <h3 className="font-serif text-lg md:text-xl tracking-wide text-center mb-6">
            {t.aftercare.faqTitle}
          </h3>
          <div className="max-w-3xl mx-auto divide-y divide-ink-stone/20 border border-ink-stone/20">
            {t.aftercare.faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-serif text-sm md:text-base hover:text-ink-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`text-ink-gold shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 font-serif text-sm text-ink-stone leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
