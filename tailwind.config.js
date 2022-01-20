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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
