export default function SubtleDivider({ className = 'my-8' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="w-12 md:w-16 h-px bg-ink-gold/70" />
      <span className="w-1.5 h-1.5 rotate-45 bg-ink-gold" />
      <span className="w-12 md:w-16 h-px bg-ink-gold/70" />
    </div>
  )
}
