/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      
      animation: {
        'spin-slow': 'spin 7s linear infinite',
         },

      colors:{
        primary:'#06b6d4',
        darkpurle:'#4c1d95',
        dark:'#0f172a'
      },

      screens:{
        '2xl': '1320px'  
      }
    },
  },
  plugins: [],
}

