/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9ECF5",
        secondary: "#CCD6EB",
        accent: "#14248A",
        theme: {
          purple: "#944bbb",
          lightpurple: "#ba4cf6",
          pink: "#AE76A6",
          black: "#1C1D21",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mark: ["Marck Script", "cursive"],
        heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
