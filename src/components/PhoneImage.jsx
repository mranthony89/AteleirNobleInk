import { GLYPHS, UNITS_PER_EM } from '../lib/phoneGlyphs.js'

// Mostra un numero di telefono come immagine vettoriale (nessun testo nella pagina).
// `text` è il numero già formattato (es. "+34 642 558 339"); `label` è la descrizione per chi usa
// uno screen reader (senza cifre: per contattare lo studio c'è il pulsante WhatsApp).
const TRACKING = 30 // spaziatura extra tra le cifre, in unità del font

export default function PhoneImage({ text, label, className = 'h-[1.15em] w-auto' }) {
  let x = 0
  const glyphs = []
  for (const ch of text) {
    const g = GLYPHS[ch]
    if (!g) continue
    if (g.d) glyphs.push({ d: g.d, x })
    x += g.w + TRACKING
  }
  const width = x - TRACKING
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 ${-0.78 * UNITS_PER_EM} ${width} ${0.86 * UNITS_PER_EM}`}
      className={`inline-block align-[-0.2em] ${className}`}
      fill="currentColor"
    >
      {glyphs.map((g, i) => (
        <path key={i} d={g.d} transform={`translate(${g.x} 0) scale(1 -1)`} />
      ))}
    </svg>
  )
}
