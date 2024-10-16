/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#DAA625",
        secondary: "#1B3C1C",
        tertiary: "#008542",
        footer: "#F2F2F2",
        button: "#28941E",
      },
      fontFamily: {
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};

