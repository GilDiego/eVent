require('dotenv').config();

const { PORT, DATABASE_URL, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

module.exports = {
  port: PORT || 3001,
  databaseUrl: DATABASE_URL,
  cloudinary: {
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  },
};
