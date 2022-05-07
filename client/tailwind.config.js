module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0066ff",
        mainColorDark: "#1864ab",
        mainColor100: "#a5d8ff",
        backgroundColor: "#fff",
        mainBlack: "#070707",
        mainBlackLight: "#707070",
      },
      gridTemplateColumns: {
        grid2: "auto 1fr",
        grid2R: "1fr auto",
        "1fr_1fr": "1fr 1fr",
      },
    },
  },
  plugins: [],
};
