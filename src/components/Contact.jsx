import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const STUDIO_EMAIL = 'info@ateliernobleink.com'
const STUDIO_PHONE_DISPLAY = '+34 3333333'
const STUDIO_PHONE_DIGITS = '343333333'

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ateliernobleink',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'Instagram',
    path: null,
    href: 'https://www.instagram.com/ateliernobleink',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@ateliernobleink',
    path: 'M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5c.35 0 .69.05 1 .14V7a6 6 0 1 0 6 6V8.5a6.5 6.5 0 0 0 3.5 1V6.8A5 5 0 0 1 17 4h-3z',
  },
]

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${t.contact.title} — ${form.name || ''}`)
    const body = encodeURIComponent(
      `${t.contact.name}: ${form.name}\n${t.contact.email}: ${form.email}\n${t.contact.phone}: ${form.phone}\n\n${t.contact.message}:\n${form.message}`
    )
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contatti" className="bg-ink-black text-ink-ivory py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
            {t.contact.eyebrow}
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-4">{t.contact.title}</h2>
          <p className="font-serif text-ink-ivory/70 mt-4 max-w-lg mx-auto">{t.contact.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-serif text-sm text-ink-ivory/70">
              {t.contact.name}
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border-b border-ink-stone/50 focus:border-ink-gold outline-none py-2 font-serif"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-serif text-sm text-ink-ivory/70">
              {t.contact.email}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b border-ink-stone/50 focus:border-ink-gold outline-none py-2 font-serif"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="phone" className="font-serif text-sm text-ink-ivory/70">
              {t.contact.phone}
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="bg-transparent border-b border-ink-stone/50 focus:border-ink-gold outline-none py-2 font-serif"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className="font-serif text-sm text-ink-ivory/70">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="bg-transparent border-b border-ink-stone/50 focus:border-ink-gold outline-none py-2 font-serif resize-none"
            />
          </div>

          <button
            type="submit"
            className="sm:col-span-2 mt-4 border border-ink-gold text-ink-gold px-8 py-3 font-serif text-sm tracking-widest2 uppercase hover:bg-ink-gold hover:text-ink-black transition-colors"
          >
            {t.contact.submit}
          </button>

          {sent && (
            <p className="sm:col-span-2 font-serif text-sm text-ink-gold text-center">
              {t.contact.sent}
            </p>
          )}
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center font-serif text-sm text-ink-ivory/70">
          <div>
            <p className="tracking-widest2 uppercase text-ink-gold mb-2 text-xs">
              {t.contact.addressLabel}
            </p>
            <p>{t.contact.address}</p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(t.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-block mt-3 text-xs tracking-widest2 uppercase text-ink-gold underline underline-offset-4"
            >
              {t.contact.directions}
            </a>
          </div>
          <div>
            <p className="tracking-widest2 uppercase text-ink-gold mb-2 text-xs">
              {t.contact.hoursLabel}
            </p>
            <p>{t.contact.hours}</p>
          </div>
          <div>
            <p className="tracking-widest2 uppercase text-ink-gold mb-2 text-xs">
              {t.contact.contactLabel}
            </p>
            <p>{STUDIO_EMAIL}</p>
            <a
              href={`https://wa.me/${STUDIO_PHONE_DIGITS}`}
              className="block md:pointer-events-none md:cursor-default hover:text-ink-gold md:hover:text-ink-ivory/70 transition-colors"
            >
              {STUDIO_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-16">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-ink-gold/40 text-ink-ivory/80 hover:border-ink-gold hover:text-ink-gold transition-colors"
            >
              {s.name === 'Instagram' ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <line x1="17.3" y1="6.7" x2="17.31" y2="6.7" strokeLinecap="round" strokeWidth="2.2" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d={s.path} />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
