/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD853A",
        primary_hover: "#FEB273",
        primary_lighter: "#FEB273",
        text_dark: "#344054",
        text_light: "#fff",
        bg_dark: "#171717",
        bg_dark_lighter: "#272727",
        bg_light: "#fff",
        border: "#475467",
      },
      letterSpacing: {
        widest: ".45rem",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1024px",
        lg: "1280px"
      }
    },
  },
  plugins: [],
}