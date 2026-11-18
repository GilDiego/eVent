const express = require('express');
const router = express.Router();
const { getAllUsers, getUserByID } = require('../controllers/User/getController');
const { postUser, loginUser } = require('../controllers/User/postController');
router.get('/all', getAllUsers);
router.get('/:id', getUserByID);
router.post('/', postUser);
router.post('/login', loginUser);
module.exports = router;
