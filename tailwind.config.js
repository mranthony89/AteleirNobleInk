/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          black: '#000000',
          charcoal: '#262626',
          stone: '#5A5A5A',
          beige: '#EBE2D6',
          ivory: '#F7F5F0',
          gold: '#DAAF37',
          bronze: '#B8860B',
        },
      },
      fontFamily: {
        // testo: Lora (molto leggibile, anche a corpo piccolo)
        serif: ['Lora', 'Georgia', '"Times New Roman"', 'serif'],
        // titoli e marchio: Cormorant Garamond (elegante, di sapore classico)
        display: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      boxShadow: {
        // alone dorato (design system Stitch, rielaborato)
        gold: '0 0 20px rgba(218, 175, 55, 0.25)',
        'gold-lg': '0 0 32px rgba(218, 175, 55, 0.4)',
        soft: '0 10px 40px -12px rgba(38, 38, 38, 0.18)',
        'soft-dark': '0 14px 44px -14px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
