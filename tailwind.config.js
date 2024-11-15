/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#00ADB5',
        third: '#393E46',
        fourth: '#EEEEEE',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
