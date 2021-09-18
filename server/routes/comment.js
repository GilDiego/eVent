const express = require('express');
const router = express.Router();

const { 
    postComment 
} = require('../controllers/Comment/postController');

const {
    getAllComments
} = require('../controllers/Comment/getController');



//GET
router.get('/all',getAllComments);

//POST
router.post('/', postComment);


module.exports = router;