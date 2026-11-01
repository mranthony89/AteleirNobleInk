import { useEffect } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import logoMarkSvg from '../assets/logo-mark.svg?raw'

export default function Logo({ className = 'w-16 h-16', color = 'currentColor' }) {
  return (
    <span
      className={`logo-mark inline-block ${className}`}
      style={{ color }}
      aria-label="Atelier Noble Ink logo"
      role="img"
      dangerouslySetInnerHTML={{ __html: logoMarkSvg }}
    />
  )
}

// Logo che si "disegna": il cerchio d'inchiostro viene tracciato in senso orario,
// come una pennellata, e poi il marchio si completa con un leggero alone dorato.
// Parte SEMPRE, anche con "riduci movimento" attivo nel telefono (è un'animazione breve,
// piccola e senza spostamenti); con quell'impostazione dura un po' meno.
// Se il browser non supporta la maschera conica, ripiega su una semplice dissolvenza.
const supportsConicMask =
  typeof CSS !== 'undefined' &&
  typeof CSS.supports === 'function' &&
  (CSS.supports('mask-image', 'conic-gradient(#000, transparent)') ||
    CSS.supports('-webkit-mask-image', 'conic-gradient(#000, transparent)'))

export function AnimatedLogo({ className = 'w-16 h-16', color = '#000000', delay = 0, duration = 2.2, play = true }) {
  const reduce = useReducedMotion()
  const angle = useMotionValue(0)
  const mask = useTransform(
    angle,
    (a) => `conic-gradient(from 0deg at 50% 50%, #000 0deg, #000 ${a}deg, transparent ${a + 0.01}deg)`,
  )
  const glow = useTransform(angle, [300, 360], [0, 1])
  const fade = useTransform(angle, [0, 360], [0, 1])
  const grow = useTransform(angle, [0, 360], [0.92, 1])

  useEffect(() => {
    if (!play) return undefined
    const controls = animate(angle, 360, {
      duration: reduce ? Math.min(duration, 1.6) : duration,
      delay,
      ease: [0.45, 0.05, 0.2, 1],
    })
    return () => controls.stop()
  }, [play, reduce, angle, delay, duration])

  const markStyle = supportsConicMask
    ? { color, WebkitMaskImage: mask, maskImage: mask }
    : { color, opacity: fade, scale: grow }

  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-[-12%] rounded-full pointer-events-none"
        style={{
          opacity: glow,
          background: 'radial-gradient(circle, rgba(218,175,55,0.16) 0%, rgba(218,175,55,0) 65%)',
        }}
      />
      <motion.span
        className="logo-mark relative block w-full h-full"
        style={markStyle}
        aria-label="Atelier Noble Ink logo"
        role="img"
        dangerouslySetInnerHTML={{ __html: logoMarkSvg }}
      />
    </span>
  )
}
