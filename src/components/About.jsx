import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from '../lib/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  // La linea dorata che unisce le tre fasi si traccia con lo scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const line = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="chi-siamo" className="bg-ink-ivory pt-16 pb-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} className="mb-8" />
        <Reveal as="p" delay={0.1} className="font-serif text-base md:text-lg leading-relaxed text-ink-charcoal text-center max-w-3xl mx-auto">
          {t.about.p1}
        </Reveal>

        <div className="mt-16 md:mt-20 text-center">
          <Reveal as="h3" className="font-serif text-xl md:text-2xl tracking-wide">{t.ritual.title}</Reveal>
          <Reveal as="p" delay={0.1} className="font-serif text-ink-stone mt-3 max-w-xl mx-auto">{t.ritual.subtitle}</Reveal>
        </div>

        <div ref={ref} className="relative mt-12">
          {/* linea orizzontale (desktop) */}
          <div className="hidden md:block absolute top-0 left-[16.6%] right-[16.6%] h-px bg-ink-stone/15" aria-hidden="true" />
          <motion.div
            className="hidden md:block absolute top-0 left-[16.6%] right-[16.6%] h-px bg-ink-gold origin-left"
            style={{ scaleX: line }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.ritual.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group relative h-full rounded-2xl glass-light p-7 pt-12 text-center shadow-soft hover:shadow-gold hover:border-ink-gold/50 transition-shadow duration-500"
                >
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[4.5rem] h-[4.5rem] items-center justify-center rounded-full bg-ink-ivory border border-ink-gold/60 font-serif text-2xl text-ink-gold group-hover:bg-ink-gold group-hover:text-ink-black transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-serif text-lg tracking-wide mb-3">{step.title}</h4>
                  <p className="font-serif text-sm text-ink-stone leading-relaxed">{step.text}</p>
                  <p className="mt-5 inline-block rounded-full border border-ink-gold/40 px-3 py-1 font-serif text-[10px] tracking-widest2 uppercase text-ink-gold">
                    {step.tag}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
