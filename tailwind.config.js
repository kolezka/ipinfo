const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      minHeight: {
        16: '4rem'
      },
      maxHeight: {
        36: '9rem'
      },
      colors: {
        red: {
          ...colors.red
        },
        primary: {
          50: '#d2e3ff',
          100: '#b4d0ff',
          200: '#a5c7ff',
          300: '#87b4ff',
          400: '#78abff',
          500: '#69a2ff',
          600: '#5e91e5',
          700: '#5481cc',
          900: '#0a1019'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
