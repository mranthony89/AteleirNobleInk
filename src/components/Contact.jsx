import { useState } from 'react'

const STUDIO_EMAIL = 'info@ateliernobleink.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Richiesta di consulenza — ${form.name || 'Nuovo cliente'}`)
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nTelefono: ${form.phone}\n\nMessaggio:\n${form.message}`
    )
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contatti" className="bg-ink-black text-ink-ivory py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-serif text-xs tracking-widest2 uppercase text-ink-gold">
            Prenotazioni
          </span>
          <h2 className="font-serif text-2xl md:text-4xl mt-4">Prenota la tua Consulenza</h2>
          <p className="font-serif text-ink-ivory/70 mt-4 max-w-lg mx-auto">
            Raccontaci la tua idea: ti risponderemo per fissare un appuntamento in studio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-serif text-sm text-ink-ivory/70">
              Nome
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
              Email
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
              Telefono
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
              Descrivi la tua idea
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
            Invia Richiesta
          </button>

          {sent && (
            <p className="sm:col-span-2 font-serif text-sm text-ink-gold text-center">
              Il tuo client email si sta aprendo per completare l'invio. A presto in atelier.
            </p>
          )}
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center font-serif text-sm text-ink-ivory/70">
          <div>
            <p className="tracking-widest2 uppercase text-ink-gold mb-2 text-xs">Indirizzo</p>
            <p>Via dell'Arte 12, Milano</p>
          </div>
          <div>
            <p className="tracking-widest2 uppercase text-ink-gold mb-2 text-xs">Orari</p>
            <p>Mar–Sab, 11:00–19:00</p>
          </div>
          <div>
            <p className="tracking-widest2 uppercase text-ink-gold mb-2 text-xs">Contatti</p>
            <p>{STUDIO_EMAIL}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
