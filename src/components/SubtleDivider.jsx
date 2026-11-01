import { motion } from 'framer-motion'
import { EASE } from '../lib/Reveal.jsx'

// Divisore dorato: due linee che si tracciano verso il centro e un rombo che "si accende"
export default function SubtleDivider({ className = 'my-8', delay = 0, active = true }) {
  const state = active ? 'show' : 'hide'
  const view = { once: true, amount: 1 }
  return (
    <motion.div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
      initial="hide"
      whileInView={active ? 'show' : undefined}
      animate={active ? undefined : state}
      viewport={view}
    >
      <motion.span
        className="w-12 md:w-16 h-px bg-ink-gold/70 origin-right"
        variants={{ hide: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      />
      <motion.span
        className="w-1.5 h-1.5 bg-ink-gold"
        variants={{
          hide: { scale: 0, rotate: 0, opacity: 0 },
          show: { scale: 1, rotate: 45, opacity: 1 },
        }}
        transition={{ duration: 0.7, delay: delay + 0.35, ease: EASE }}
      />
      <motion.span
        className="w-12 md:w-16 h-px bg-ink-gold/70 origin-left"
        variants={{ hide: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      />
    </motion.div>
  )
}
