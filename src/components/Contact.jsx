import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal, { EASE } from '../lib/Reveal.jsx'
import { WhatsAppIcon } from './Icons.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import {
  CONTACT_ENDPOINT,
  STUDIO_EMAIL,
  STUDIO_PHONE_DISPLAY,
  whatsappUrl,
} from '../config.js'

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

const EMPTY = { name: '', email: '', phone: '', message: '', website: '' } // website = honeypot anti-spam

export default function Contact() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || 'send_failed')
      setStatus('sent')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const mailtoFallback = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(t.contact.title)}&body=${encodeURIComponent(
    `${t.contact.name}: ${form.name}\n${t.contact.phone}: ${form.phone}\n\n${form.message}`,
  )}`

  return (
    <section id="contatti" className="relative bg-ink-black text-ink-ivory pt-16 pb-32 md:py-24 overflow-clip">
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[28rem] rounded-full bg-ink-gold/[0.07] blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} tone="dark" />

        <Reveal className="relative rounded-2xl glass-dark p-6 md:p-10 shadow-soft-dark">
          <AnimatePresence mode="wait" initial={false}>
            {status === 'sent' ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center text-center py-8"
                role="status"
              >
                <svg viewBox="0 0 64 64" className="w-20 h-20 text-ink-gold" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <motion.circle cx="32" cy="32" r="28" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, ease: EASE }} />
                  <motion.path d="M20 33l8 8 16-17" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.7, ease: EASE }} />
                </svg>
                <h3 className="font-serif text-3xl mt-6">{t.contact.sentTitle}</h3>
                <p className="font-serif text-ink-ivory/75 mt-3 max-w-sm">{t.contact.sentText}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 font-serif text-xs tracking-widest2 uppercase text-ink-gold underline underline-offset-4 hover:text-ink-ivory transition-colors"
                >
                  {t.contact.sendAnother}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-serif text-xs tracking-widest2 uppercase text-ink-ivory/60">{t.contact.name}</label>
                  <input id="name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} className="field font-serif" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-serif text-xs tracking-widest2 uppercase text-ink-ivory/60">{t.contact.email}</label>
                  <input id="email" type="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} className="field font-serif" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="phone" className="font-serif text-xs tracking-widest2 uppercase text-ink-ivory/60">{t.contact.phone}</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} className="field font-serif" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="font-serif text-xs tracking-widest2 uppercase text-ink-ivory/60">{t.contact.message}</label>
                  <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} className="field font-serif resize-none" />
                </div>

                {/* Honeypot: invisibile agli utenti, i bot lo compilano */}
                <div className="hidden" aria-hidden="true">
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="sm:col-span-2 mt-2 rounded-xl border border-ink-gold bg-ink-gold/5 text-ink-gold px-8 py-3.5 font-serif text-sm tracking-widest2 uppercase hover:bg-ink-gold hover:text-ink-black hover:shadow-gold-lg transition-all disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === 'sending' ? t.contact.sending : t.contact.submit}
                </motion.button>

                <div className="sm:col-span-2 flex items-center gap-4 font-serif text-xs tracking-widest2 uppercase text-ink-ivory/50" aria-hidden="true">
                  <span className="flex-1 h-px bg-ink-stone/40" />
                  {t.contact.or}
                  <span className="flex-1 h-px bg-ink-stone/40" />
                </div>

                <a
                  href={whatsappUrl(t.contact.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-xl border border-ink-stone/60 px-8 py-3.5 font-serif text-sm tracking-widest2 uppercase text-ink-ivory hover:border-ink-gold hover:text-ink-gold transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t.contact.whatsapp}
                </a>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      role="alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="sm:col-span-2 font-serif text-sm text-red-300 text-center"
                    >
                      {t.contact.error}{' '}
                      <a href={mailtoFallback} className="underline underline-offset-4 text-ink-gold">{STUDIO_EMAIL}</a>
                    </motion.p>
                  )}
                </AnimatePresence>

                <p className="sm:col-span-2 font-serif text-[11px] text-ink-ivory/40 text-center">{t.contact.privacy}</p>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-center font-serif text-sm text-ink-ivory/70">
          {[
            {
              label: t.contact.addressLabel,
              body: (
                <>
                  <p>{t.contact.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(t.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs tracking-widest2 uppercase text-ink-gold underline underline-offset-4"
                  >
                    {t.contact.directions}
                  </a>
                </>
              ),
            },
            { label: t.contact.hoursLabel, body: <p>{t.contact.hours}</p> },
            {
              label: t.contact.contactLabel,
              body: (
                <>
                  <a href={`mailto:${STUDIO_EMAIL}`} className="block break-all hover:text-ink-gold transition-colors">{STUDIO_EMAIL}</a>
                  <a href={whatsappUrl(t.contact.waMessage)} target="_blank" rel="noopener noreferrer" className="block mt-1 hover:text-ink-gold transition-colors">
                    {STUDIO_PHONE_DISPLAY}
                  </a>
                </>
              ),
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1} className="rounded-2xl glass-dark p-6">
              <p className="tracking-widest2 uppercase text-ink-gold mb-3 text-xs">{c.label}</p>
              {c.body}
            </Reveal>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          {SOCIAL_LINKS.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              whileHover={{ y: -3 }}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-ink-gold/40 text-ink-ivory/80 hover:border-ink-gold hover:text-ink-gold hover:shadow-gold transition-colors"
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
