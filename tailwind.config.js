/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        33: "0 0 31%",
        50: "0 0 50%",
        60: "0 0 60%",
        40: "0 0 40%",
        25: "0 0 25%",
        20: "0 0 20%",
        16: "0 0 16.66666666666667%",
        100: "0 0 100%",
      },
      maxWidth: {
        33: "31%",
        20: "20%",
        50: "50%",
        25: "25%",
        16: "16.66666666666667%",
        60: "60%",
      },
    },
    screens: {
      mb: "320px",
      // => @media (min-width: 640px) { ... }
      sm: { max: "766px" },
      md: { min: "767px", max: "1022px" },
      lg: { min: "1023px" },
      xl: { max: "1279px" },
    },
  },
  plugins: [],
};
