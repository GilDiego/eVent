const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/User/getController');
const { postUser } = require('../controllers/User/postController');


//GET
router.get('/all',getAllUsers);

//POST
router.post('/',postUser);





module.exports = router;