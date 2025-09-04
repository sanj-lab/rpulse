/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'quentlex-gold': 'hsl(var(--quentlex-gold))',
        'quentlex-dark': 'hsl(var(--quentlex-dark))',
        'deep-navy': 'hsl(var(--deep-navy))',
        'warm-gray': 'hsl(var(--warm-gray))',
        'light-gray': 'hsl(var(--light-gray))',
        'trust-blue': 'hsl(var(--trust-blue))',
        'success-green': 'hsl(var(--success-green))',
        'alert-amber': 'hsl(var(--alert-amber))',
        'pure-white': 'hsl(var(--pure-white))',
        'off-white': 'hsl(var(--off-white))',
        'charcoal': 'hsl(var(--charcoal))'
      }
    }
  },
  plugins: [],
}