/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.start-9': { gridRowStart: '1' },
        '.start-10': { gridRowStart: '2' },
        '.start-11': { gridRowStart: '3' },
        '.start-12': { gridRowStart: '4' },
        '.start-13': { gridRowStart: '5' },
        '.start-14': { gridRowStart: '6' },
        '.start-15': { gridRowStart: '7' },
        '.start-16': { gridRowStart: '8' },
        '.start-17': { gridRowStart: '9' },
        '.start-18': { gridRowStart: '10' },
        '.end-10': { gridRowEnd: '2' },
        '.end-11': { gridRowEnd: '3' },
        '.end-12': { gridRowEnd: '4' },
        '.end-13': { gridRowEnd: '5' },
        '.end-14': { gridRowEnd: '6' },
        '.end-15': { gridRowEnd: '7' },
        '.end-16': { gridRowEnd: '8' },
        '.end-17': { gridRowEnd: '9' },
        '.end-18': { gridRowEnd: '10' },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

