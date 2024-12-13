/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "foundation-blue-500": "#4877D1", // Custom color
        "pera-text-color":"#6B6B6B"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a custom font family
        fredoka: ["Fredoka", "sans-serif"],
      },
      boxShadow: {
        'custom-shadow': '0px 6px 16px 0px rgba(0, 0, 0, 0.12)',
      },
      container: {
        center: true,
        screens: {
          "2xl": "1320px",
        },
        padding: "24px",
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "576px",
        lg: "768px",
        xlg: "992px",
        xl: "1200px",
        "2xl": "1366px",
      },
    },
  },
  plugins: [],
}