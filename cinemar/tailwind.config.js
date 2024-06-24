/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'julius': ["Julius Sans One"]
    },
    extend: {
      colors: {
        "primary-raul": "#000"
      }
    },
  },
  plugins: [],
}