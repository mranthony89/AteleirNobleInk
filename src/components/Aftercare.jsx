import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from '../lib/Reveal.jsx'
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
    <section id="cura-tatuaggio" className="bg-ink-ivory py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow={t.aftercare.eyebrow} title={t.aftercare.heroTitle} subtitle={t.aftercare.heroSubtitle} />

        <Reveal className="text-center mb-8">
          <h3 className="font-serif text-lg md:text-xl tracking-wide mb-2">{t.aftercare.introTitle}</h3>
          <p className="font-serif text-sm text-ink-stone">{t.aftercare.introText}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {t.aftercare.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 2) * 0.12} className="h-full">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group h-full rounded-2xl border border-ink-stone/20 bg-white/50 overflow-hidden shadow-soft hover:shadow-gold hover:border-ink-gold/50 transition-shadow duration-500"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={STEP_IMAGES[i]} alt={step.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                <span className="absolute top-3 left-3 bg-ink-gold/90 text-ink-black text-xs font-serif tracking-wide px-3 py-1 rounded-full">
                  {step.badge}
                </span>
              </div>
              <div className="p-6">
                <p className="font-serif text-xs tracking-widest2 uppercase text-ink-gold mb-2">{step.label}</p>
                <h4 className="font-serif text-lg mb-2">{step.title}</h4>
                <p className="font-serif text-sm text-ink-stone leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-ink-stone/20 pt-8 mb-10">
          <h3 className="font-serif text-lg md:text-xl tracking-wide text-center mb-6">
            {t.aftercare.warningsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal as="ul" className="space-y-3 rounded-2xl bg-white/40 border border-ink-stone/15 p-6">
              {t.aftercare.donts.map((item) => (
                <li key={item} className="flex items-start gap-3 font-serif text-sm text-ink-charcoal">
                  <span className="text-ink-stone mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </Reveal>
            <Reveal as="ul" delay={0.12} className="space-y-3 rounded-2xl bg-ink-gold/[0.07] border border-ink-gold/30 p-6">
              {t.aftercare.dos.map((item) => (
                <li key={item} className="flex items-start gap-3 font-serif text-sm text-ink-charcoal">
                  <span className="text-ink-gold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="border-t border-ink-stone/20 pt-8">
          <h3 className="font-serif text-lg md:text-xl tracking-wide text-center mb-6">
            {t.aftercare.faqTitle}
          </h3>
          <div className="max-w-3xl mx-auto divide-y divide-ink-stone/20 border border-ink-stone/20 rounded-2xl overflow-hidden bg-white/40">
            {t.aftercare.faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
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
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 font-serif text-sm text-ink-stone leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
