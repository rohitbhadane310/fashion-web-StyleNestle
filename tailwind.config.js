/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#f5ebe0",
        SecondaryColor: "#e3d5ca",
        DarkColor: "#d4a373",
        ExtraDarkColor: "#a98467",
      },
    },
  },
  plugins: [],
};
