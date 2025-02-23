/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Dostosuj do swojej struktury projektu
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
      },
      colors: {
        primaryRed: "#AC1213",
        secondaryRed: "#B81011",
        accentBlue: "#28357B",
        grey: "#565656",
        lightGrey: "#767676",
        bodyBackground: "#F6F6F6",
        black: "#000000",
        lightBlack: '#202020',
      },
    },
  },
  plugins: [],
}

