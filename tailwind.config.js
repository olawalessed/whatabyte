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
      "food-background":
        "url('https://res.cloudinary.com/qribcom/image/upload/v1633624737/Test-random/food-image_j2nmvr.jpg')",
    },
    extend: {
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
