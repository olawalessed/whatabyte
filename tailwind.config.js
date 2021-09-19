module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    backgroundImage: {
      "hero-pattern":
        "url('https://res.cloudinary.com/qribcom/image/upload/v1632078586/Test-random/hero-img_u4locn.jpg')",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
