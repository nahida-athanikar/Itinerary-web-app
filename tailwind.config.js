/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        moderniz: ['Moderniz', 'sans-serif'],
        mont: ['"Mont"', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

