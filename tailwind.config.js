module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "481px",
        laptop: "769px",
        desktop: "1025px",
      },
      backgroundImage: {
        "dots-dark": `radial-gradient(#444444 1px,transparent 0)`,
        "dots-light": `radial-gradient(#CCCCCC 1px,transparent 0)`,
        "zomato-bg": `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)`,
      },
      background: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
