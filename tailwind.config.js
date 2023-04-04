/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      black: "#090909",
      white: "white",
      gray: {
        100: "#D9D9D9",
        300: "#727272",
        500: "#373737",
        700: "#202020",
        900: "#131313",
      },
      green: "#61CE4F",
      red: "#F44336",
      yellow: "#EFE056",
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
  plugins: [],
};
