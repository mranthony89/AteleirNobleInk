import { useLanguage } from '../i18n/LanguageContext.jsx'

const photos = ['/team/tatuatore-1.jpg', '/team/tatuatore-2.jpg', '/team/tatuatore-3.jpg']

export default function Team() {
  const { t } = useLanguage()

  return (
    <section id="servizi" className="bg-ink-black text-ink-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
            {t.team.eyebrow}
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-4">{t.team.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {t.team.members.map((member, i) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <img
                src={photos[i]}
                alt={member.name}
                className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border border-ink-gold/50 mb-6"
              />
              <h3 className="font-serif text-lg tracking-wide mb-2">{member.name}</h3>
              <p className="font-serif text-sm text-ink-ivory/80 leading-relaxed mb-4">{member.bio}</p>
              <p className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">{member.styles}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
