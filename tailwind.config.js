/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6V66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      boxShadow: {
        '3xl': '0px 0px 50px 60px rgb(247,247,247)'
      },
      fontFamily: {
        'baloo': ['Baloo\\ 2', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}