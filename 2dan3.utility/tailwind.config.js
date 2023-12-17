/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode : "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins']
      },
      colors : {
        'maroon': '#680c27'
      }
    },
  },
  plugins: [],
}

