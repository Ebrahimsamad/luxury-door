/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b3c5a",
        secondary: "#dcc07e",
      },
      fontFamily: {
        changa: ["Changa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
