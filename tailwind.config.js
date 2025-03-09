/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C51BF",
        secondary: "#6B46C1",
        accent: "#ED64A6",
        background: "#1A202C",
        surface: "#2D3748",
        success: "#48BB78",
        warning: "#ECC94B",
        error: "#F56565",
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}

