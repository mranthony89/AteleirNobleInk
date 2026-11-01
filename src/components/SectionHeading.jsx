import Reveal from '../lib/Reveal.jsx'
import SubtleDivider from './SubtleDivider.jsx'

// Intestazione di sezione condivisa: eyebrow dorato, titolo, divisore animato, sottotitolo
export default function SectionHeading({ eyebrow, title, subtitle, tone = 'light', className = 'mb-12' }) {
  const sub = tone === 'dark' ? 'text-ink-ivory/70' : 'text-ink-stone'
  return (
    <div className={`text-center ${className}`}>
      <Reveal as="span" y={12} className="inline-block font-serif text-xs tracking-widest2 uppercase text-ink-gold">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={0.1} className="font-serif text-3xl md:text-5xl mt-4">
        {title}
      </Reveal>
      <SubtleDivider className="mt-6 mb-0" delay={0.2} />
      {subtitle && (
        <Reveal as="p" delay={0.25} className={`font-serif mt-5 max-w-xl mx-auto ${sub}`}>
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}
