/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans'", ...defaultTheme.fontFamily.sans],
        serif: ["'Source Serif 4'", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        "primary-black": "#111111",
        "primary-orange": "#F1592B",
        "primary-green": "#00453E"
      },
      boxShadow: {
        primary: "0px 3px 3px 1px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: []
};
