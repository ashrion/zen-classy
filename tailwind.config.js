/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', 'js/**/*.js'],
  darkMode: 'class',
  safelist: [
    'hover:text-blue-500',
    'hover:text-emerald-500',
    'hover:border-blue-500/30',
    'hover:border-green-500/30',
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Outfit', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      colors: {
        brand: '#3b82f6',
        borderDark: 'rgba(255,255,255,0.08)'
      }
    }
  },
  plugins: [],
}

