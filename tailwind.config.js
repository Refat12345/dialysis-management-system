/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin:{
        "1.5":"0.375rem",
        "5px":"0.3125 ",
        "2.5":"0.6250rem"
      },
      borderRadius: {
        "5xl": "2.5rem",
      },
      fontFamily: {
        primaryBold: ["primaryBold", "sans-serif"],
        primaryRegular: ["primaryRegular", "sans-serif"],
      },
      fontSize: {
        customSize: "22px",
        ms: "0.84375rem",
        md: "0.9375rem",
        s: "0.78125rem",
        17: "1.0625rem",
      },
      width: {
        phone: "100px",
        "1/10": "10%",
      },
      colors: {
        primaryColor: "rgba(244,247,254,255)",
        titleColor: "rgba(49,51,127,255)",
        titleSideColor: "rgba(46, 48, 125, 1)",
        textButtonColor: "rgba(46,48,125,255)",
        bgSideButton: "rgba(229, 215, 185, 1)",
        bgMedicalRecord:"#F7F4EC",
        bgbutton: "#d4b77c",
        bgtitle: "#c49d69",
        bgButtonColor: "rgba(212,183,124,255)",
        customBlue: "#eff3ff",
        cardInDialysisPage: "#f6f9ff",
        borderINCardInDialysisPage: "#f1f4fa",

        bgDashboard: "rgba(244, 247, 254, 255)",
        textMenuColor: "rgba(117,117,117,1)",
        healthInformationTitle: "rgba(89,91,153,255)",
        bgMedicineStatus: "rgba(241, 241, 255, 1)",
        bgMedicalCenters: "rgba(229, 215, 185, 0.25)",
        bgOrders:"rgba(242, 241, 237, 1)",
        kk: "#d4b77d",
        headerTable: "#e5d7ba",
        firstRow: "#f6f9ff",
        secondRow: "#fff9ed",
        customPurple: "#4a4881",
        dropmenu: "#f5fafc",
        cardColor: "#f6f9ff",
        search: "#eff3ff",
        gray100: "#E4E4E7",
        bgTab: "#C3974C",
        bgLogin: "#E6D7B6",
        primaryFontColor: "#27272A",
        whiteCard: "#ffffff",

        //blue
        blue400: "#9AB8FF80",
        blue600: "#2E307D",
        cardDetailsColor:"#e0e9fa",
        blue700:"#424489",
        //green
        green400: "#149603",
        //gray
        gray200: "#f9f9f9",
        gray700: "#333333",

        bgSecretaria: "#F7F4EC",
        gray300: "#e4e9f4",
      },
      screens: {
        lg2: "1250px",
        phone: "100px",
        "1/10": "10%",
      },

      minHeight: {
        customUnder600: "315px",
        customUnder618:"369px",
        customUnder680: "385px",
        customUnder735: "422px",
        customUnder830: "446px",
        customAbove830: "512px",
        centerAbove700:"539px",
        centerAbove700_1400:"560px",
        centerUnder700:"499px",
        centerUnder630:"482px",
        AuditAbove800:"580px",
        AuditAbove740:"532px",
        AuditAbove700:"483px",
        AuditAbove630:"434px",
        AuditUnder630:"385px"
        
      },
    },
  },

  plugins: [],
};
