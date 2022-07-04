/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      screens: {
        "nav-close": "900px",
      },
      colors: {
        "brand-blue": "#109ebf",
      },
    },
  },
  plugins: [],
};
