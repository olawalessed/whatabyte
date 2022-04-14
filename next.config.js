module.exports = {
  images: {
    domains: [
      "play.google.com",
      "res.cloudinary.com",
      "developer.apple.com",
      "images.ctfassets.net",
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
  },
};
