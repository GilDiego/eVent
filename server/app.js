const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', require('./routes/event'));
app.use('/api/user', require('./routes/user'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/promoter', require('./routes/promoter'));
app.use('/api/location', require('./routes/location'));
app.use('/cloudinary', require('./routes/cloudinary'));

module.exports = app;
