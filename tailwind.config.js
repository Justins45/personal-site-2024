/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    colors: {
      "offwhite": {
        500: "#FFFCF9", // Light base | Dark text
        700: "#F6EEE5" // Light highlighted
      },
      "gold": "#D1A037", // accents
      "offblack": {
        300: "#3D3D3D", // Light accent lifted background | Dark highlighted
        500: "#363636", // Light accent | Dark base
        700: "#2C2B2B", // Dark accent lifted background
        800: "#212121"  // Dark accent
      },
    },
    extend: {},
  },
  plugins: [],
}