/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'rgba(244,247,254,255)',
        titleColor:'rgba(49,51,127,255)',
        titleSideColor:'rgba(46, 48, 125, 1)',
        textButtonColor:'rgba(46,48,125,255)',
        bgSideButton:'rgba(229, 215, 185, 1)',
        bgButtonColor:'rgba(212,183,124,255)'
      },
      screens :{
        lg2:"1100px"
      },
      width:{
        '1/10':"10%"
      },
      minHeight: {
        'custom': '340px',
      }
},
  },
  plugins: [],
}

