import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from '../lib/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const photos = ['./team/tatuatore-1.jpg', './team/tatuatore-2.jpg', './team/tatuatore-3.jpg']

export default function Team() {
  const { t } = useLanguage()

  return (
    <section id="servizi" className="relative bg-ink-black text-ink-ivory py-16 md:py-24 overflow-clip">
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-ink-gold/[0.07] blur-3xl pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} tone="dark" />

        {/* Mobile: schede scorrevoli con aggancio. Desktop: 3 colonne */}
        <div className="snap-row -mx-6 px-6 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {t.team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.12} className="shrink-0 w-[82%] sm:w-[60%] md:w-auto">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group h-full rounded-2xl glass-dark p-8 flex flex-col items-center text-center hover:border-ink-gold/60 hover:shadow-gold transition-[box-shadow,border-color] duration-500"
              >
                <div className="relative mb-6">
                  <span className="absolute -inset-2 rounded-full border border-ink-gold/0 group-hover:border-ink-gold/60 group-hover:scale-105 transition-all duration-700" aria-hidden="true" />
                  <img
                    src={photos[i]}
                    alt={member.name}
                    className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border border-ink-gold/50"
                  />
                </div>
                <p className="font-serif text-[10px] tracking-widest2 uppercase text-ink-gold mb-2">
                  {t.team.roleLabel[i]}
                </p>
                <h3 className="font-serif text-xl tracking-wide mb-3">{member.name}</h3>
                <p className="font-serif text-sm text-ink-ivory/75 leading-relaxed mb-5">{member.bio}</p>
                <p className="font-serif text-[11px] tracking-widest2 uppercase text-ink-gold/90 mt-auto">{member.styles}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-gold/30 px-3 py-1 font-serif text-[11px] text-ink-ivory/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-gold animate-pulse" aria-hidden="true" />
                  {member.availability}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
