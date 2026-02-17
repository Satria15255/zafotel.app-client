/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        ysaebau: ["Ysabeau Office", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
