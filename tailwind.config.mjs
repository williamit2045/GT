/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#003875",
          600: "#002855",
        },
        accent: {
          500: "#A91101",
          600: "#8B0000",
        },
        silver: "#C0C0C0",
      },
      animation: {
        pulse: "pulse 1.5s infinite",
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
