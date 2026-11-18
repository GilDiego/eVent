const express = require('express');
const { cloudinary } = require('../cloudinaryConfig');

const router = express.Router();

router.get('/images', async (req, res) => {
  try {
    const { resources } = await cloudinary.search
      .expression('folder:cloudinary_event')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    res.send(resources.map((file) => file.public_id));
  } catch (error) {
    res.status(500).json({ err: 'Something went wrong' });
  }
});

router.post('/upload', async (req, res) => {
  try {
    await cloudinary.uploader.upload(req.body.data, { upload_preset: 'cloudinary_event' });
    res.json({ msg: 'File uploaded sucessfully' });
  } catch (error) {
    res.status(500).json({ err: 'Something went wrong' });
  }
});

module.exports = router;
