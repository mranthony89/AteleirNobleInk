export default function Logo({ className = 'w-16 h-16', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Atelier Noble Ink logo"
    >
      <path
        d="M100 18
           C 146.4 18 184 55.6 184 102
           C 184 148.4 146.4 186 100 186
           C 60 186 26 158 19 120"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 34
           C 137.6 34 168 64.4 168 102
           C 168 139.6 137.6 170 100 170"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <line x1="76" y1="88" x2="76" y2="128" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <circle cx="76" cy="68" r="5.5" fill={color} />

      <line x1="100" y1="66" x2="100" y2="128" stroke={color} strokeWidth="8" strokeLinecap="round" />

      <line x1="124" y1="88" x2="124" y2="128" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <circle cx="124" cy="68" r="5.5" fill={color} />
    </svg>
  )
}
