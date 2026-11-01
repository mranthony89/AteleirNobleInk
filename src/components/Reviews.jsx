import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from '../lib/Reveal.jsx'
import { StarIcon } from './Icons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// ATTENZIONE: le recensioni sono ESEMPI di presentazione (vedi i18n/extras.js).
export default function Reviews() {
  const { t } = useLanguage()

  return (
    <section id="testimonianze" className="relative bg-ink-black text-ink-ivory py-16 md:py-24 overflow-clip">
      <div aria-hidden="true" className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[60rem] h-[26rem] rounded-full bg-ink-gold/[0.06] blur-3xl pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} subtitle={t.reviews.subtitle} tone="dark" />

        <div className="snap-row -mx-6 px-6 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {t.reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.12} className="shrink-0 w-[85%] sm:w-[60%] md:w-auto">
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative h-full rounded-2xl glass-dark p-7 md:p-8 flex flex-col hover:border-ink-gold/50 hover:shadow-gold transition-[box-shadow,border-color] duration-500"
              >
                <span className="absolute top-3 right-6 font-serif text-6xl leading-none text-ink-gold/20 select-none" aria-hidden="true">”</span>
                <div className="flex gap-1 text-ink-gold" aria-label="5/5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.3, rotate: -40 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.12 + s * 0.08, type: 'spring', stiffness: 300, damping: 14 }}
                    >
                      <StarIcon className="w-4 h-4" />
                    </motion.span>
                  ))}
                </div>
                <blockquote className="font-serif italic text-ink-ivory/90 leading-relaxed mt-5 mb-6">“{r.text}”</blockquote>
                <figcaption className="mt-auto pt-5 border-t border-ink-gold/15">
                  <p className="font-serif tracking-wide">{r.name}</p>
                  <p className="font-serif text-[11px] tracking-widest2 uppercase text-ink-gold/90 mt-1">{r.detail}</p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
