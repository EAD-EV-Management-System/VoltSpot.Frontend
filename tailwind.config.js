/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2FC284', // Green for EV theme
        secondary: '#1A1A1A',
        danger: '#F80929',
      }
    },
  },
  plugins: [],
}