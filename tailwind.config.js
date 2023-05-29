// /** @type {import('tailw:.Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,html}"],
  theme: {
    extend: {},
    screens: {
      phone: "320px",
      phone2: "400px",
      poco: "480px",
      poco2: "560px",
      sm: "640px",
      sm2: "720px",

      md: "780px",
      md2: "860px",
      semimd: "960px",
      lg: "1024px",

      xl: "1100px",
      semibig: "1190px",
      big: "1300px",
      big2: "1360px",
      big3: "1400px",
      "1xl": "1490px",
      "2xl": "1560px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
  darkMode: "class",
};
