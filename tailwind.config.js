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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
