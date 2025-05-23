module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#f43f5e',
      }
    },
  },
  plugins: [],
}

const shared = require('tailwindcss/defaultConfig');