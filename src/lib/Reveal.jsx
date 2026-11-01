import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Apparizione morbida allo scroll (una sola volta)
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.9,
  amount = 0.2,
  className = '',
  children,
  ...rest
}) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -40px 0px' }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export { EASE }
