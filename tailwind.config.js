/** @type {import('tailwindcss').Config} */
// const theme = require("./source/theme/index");
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./source/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "14px"],
      },
      // ...theme,
    },
  },
  plugins: [],
};
