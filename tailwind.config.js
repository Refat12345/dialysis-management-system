
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '5xl': '2.5rem',
      },
      fontSize: {
        customSize: "22px",
      },
      width: {
        'phone': '100px', 
        '1/10':"10%",
      },
      colors: {
        primaryColor: 'rgba(244,247,254,255)',
        titleColor:'rgba(49,51,127,255)',
        titleSideColor:'rgba(46, 48, 125, 1)',
        textButtonColor:'rgba(46,48,125,255)',
        bgSideButton:'rgba(229, 215, 185, 1)',
        bgbutton:"#d4b77c",
        bgtitle:"#c49d69",
        bgButtonColor:'rgba(212,183,124,255)',
        customBlue: '#eff3ff',
        cardInDialysisPage:'#f6f9ff',
        borderINCardInDialysisPage:'#f1f4fa',
        bgDashboard: "rgba(244, 247, 254, 255)",
        textMenuColor:'rgba(117,117,117,1)',
        healthInformationTitle:'rgba(89,91,153,255)',
        bgMedicineStatus:'rgba(241, 241, 255, 1)',
        bgMedicalCenters:"rgba(229, 215, 185, 0.25)",
        kk: '#d4b77d',
        headerTable:"#e5d7ba",
        firstRow:"#f6f9ff",
        secondRow:"#fff9ed",
        customPurple: '#4a4881',
        dropmenu:'#f5fafc',
        cardColor:'#f6f9ff',
        search:'#eff3ff',
        gray100: "#E4E4E7",
        bgTab: "#C3974C",
        primaryFontColor: "#27272A",
        whiteCard:"#ffffff",
        
        //blue
        blue400: "#9AB8FF80",
        blue600: "#2E307D",
        cardDetailsColor:"#e0e9fa",
        //green
        green400: "#149603",
      },
      screens :{
        lg2:"1250px",
        phone: "100px",
        "1/10": "10%",
      },

      minHeight: {
        'customUnder600':"320px",
        'customUnder680':"380px",
        'customUnder760':"428px",
        'customUnder830':"489px",
        "customAbove830":"550px"
      }
},
  },
  plugins: [],
};
