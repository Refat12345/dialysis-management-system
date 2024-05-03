/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        customSize: "22px",
      },
      width: {
        phone: "100px",
        "1/10": "10%",
      },
      colors: {
        primaryColor: 'rgba(244,247,254,255)',
        titleColor:'rgba(49,51,127,255)',
        titleSideColor:'rgba(46, 48, 125, 1)',
        textButtonColor:'rgba(46,48,125,255)',
        bgSideButton:'rgba(229, 215, 185, 1)',
        bgButtonColor:'rgba(212,183,124,255)',
        customBlue: '#eff3ff',
        kk: '#d4b77d',
        headerTable:"#e5d7ba",
        firstRow:"#f6f9ff",
        secondRow:"#fff9ed",
        customPurple: '#4a4881',
        dropmenu:'#f5fafc',
        cardColor:'#f6f9ff',
        search:'#eff3ff',
        cardInDialysisPage:'#f6f9ff',
        borderINCardInDialysisPage:'#f1f4fa',
        bgDashboard: "rgba(244, 247, 254, 255)",
        
        gray100: "#E4E4E7",
        bgTab: "#C3974C",
        primaryFontColor: "#27272A",
      },
      screens: {
        lg2: "1100px",
      },

      minHeight: {
        custom: "340px",
      },
    },
  },
  plugins: [],
};
