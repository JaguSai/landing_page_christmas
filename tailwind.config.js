module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "pop": ['Poppins', 'sans-serif']
    }, 
    fontWeight: {
      "regular": "400",
      "semi-bold": "600",
      "bold": "700"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
