/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};