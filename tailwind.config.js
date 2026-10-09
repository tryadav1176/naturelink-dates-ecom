/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'date-brown': {
          DEFAULT: '#2A1519',
          light: '#3D2126',
          dark: '#1B0C0E',
        },
        'palm-green': {
          DEFAULT: '#2E4A3B',
          light: '#3E614E',
          dark: '#1E3327',
        },
        'honey-gold': {
          DEFAULT: '#D9A441',
          light: '#E5B75A',
          dark: '#B8842E',
        },
        'salt': {
          DEFAULT: '#EDF0EA',
          light: '#F5F7F3',
          dark: '#DEE3D8',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(42, 21, 25, 0.08), 0 4px 12px -2px rgba(42, 21, 25, 0.04)',
        'warm-lg': '0 20px 40px -10px rgba(42, 21, 25, 0.15)',
        'gold': '0 4px 20px -2px rgba(217, 164, 65, 0.35)',
      }
    },
  },
  plugins: [],
}
