/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '280px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
};
