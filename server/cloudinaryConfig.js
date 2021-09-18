require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name:'event-pf', 
    api_key:'965938485577246', 
    api_secret:'Yh9pA8fiCegKoINDfLCQqn1NcdA' 
  });

module.exports = { cloudinary };