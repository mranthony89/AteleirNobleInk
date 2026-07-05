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
