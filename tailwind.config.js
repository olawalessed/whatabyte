module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    backgroundImage: {
      "hero-pattern": "url('/public/static/png/hero-img.jpg')",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
