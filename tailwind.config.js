/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#54BD95",
          200: "#64CFA5",
          300: "#75E1B6",
        },
        secondary:{
          100:"#222938",
          200:"#161C28"
        }
      },
      fontFamily:{
        inter:"Inter"
      }
    },
  },
  plugins: [],
};
