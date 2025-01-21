/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FCFCFC',
        yellow: '#F6E332',
        black: '#0E161E',
      },
    },
  },
  plugins: [],
}
