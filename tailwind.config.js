/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          'red-dark': '#B91C1C',
          gold: '#D97706',
          'gold-light': '#FDE68A',
          emerald: '#059669',
          'emerald-light': '#D1FAE5',
        },
        apple: {
          bg: '#FFFFFF',
          subtle: '#F5F5F7',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-subtle': 'rgba(0, 0, 0, 0.04)',
          text: '#1D1D1F',
          secondary: '#86868B',
          tertiary: '#6E6E73',
        }
      },
      fontFamily: {
        sans: [
          '"Cinzel"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"SF Pro"',
          'system-ui',
          'sans-serif'
        ],
        cinzel: [
          '"Cinzel"',
          'serif'
        ],
        cinzelDeco: [
          '"Cinzel Decorative"',
          '"Cinzel"',
          'serif'
        ],
        serif: [
          '"Cinzel"',
          '"Playfair Display"',
          'Georgia',
          'serif'
        ]
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'apple-md': '0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 20px 48px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'apple-float': '0 24px 60px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
