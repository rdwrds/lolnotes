/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-6': '#091428',
        'blue-7': '#0A1428',

        "hextech-gold": {
          100: '#f4ebd8',
          200: '#e9d7b1',
          300: '#dec38a',
          400: '#d3af63',
          500: '#c89b3c',
          600: '#a07c30',
          700: '#785d24',
          800: '#503e18',
          900: '#281f0c',
        },

        "hextech-blue": {
          100: '#ccdee6',
          200: '#99bdcd',
          300: '#669cb4',
          400: '#337b9b',
          500: '#005a82',
          600: '#004868',
          700: '#00364e',
          800: '#002434',
          900: '#00121a',
        }

      }
    },
  },
  plugins: [],
}

