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
        },
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      backgroundImage: {
        marble: "url('/marble-texture.svg')",
      },
    },
  },
  plugins: [],
}
