/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables dark mode based on a 'class' strategy
  theme: {
    extend: {
      // Custom colors for your gradient
      colors: {
        fuchsia: {
          300: '#D946EF',
        },
        sky: {
          500: '#0EA5E9',
        },
      },

      // Custom background gradient
      backgroundImage: {
        'gradient-to-tr': 'linear-gradient(to top right, #D946EF, #0EA5E9)',
      },
      // Extend spacing, typography, or other utilities if needed
      spacing: {
        '128': '32rem', // Example: add custom spacing
      },
    },
  },
  plugins: [],
};
