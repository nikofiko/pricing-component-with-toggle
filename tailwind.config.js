/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mon: ["Montserrat"],
      },
      colors: {
        'head': 'hsl(232, 13%, 33%)',
        'anu-color': 'hsl(234, 14%, 74%)',
        'slider': 'hsl(233, 13%, 49%)',
        'back': 'hsl(240, 78%, 98%)'
      },
      boxShadow: {
        custom: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
      },
    },
  },
  plugins: [],
}

