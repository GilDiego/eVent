const express = require('express');
const router = express.Router();

const {
    postComment
} = require('../controllers/Comment/postController');

const {
    getAllComments,
    getGeneralRating,
    getFormattedComments
} = require('../controllers/Comment/getController');



//GET
router.get('/all', getAllComments);
router.get('/generalRating', getGeneralRating);
router.get('/getFormattedComments', getFormattedComments);


//POST
router.post('/', postComment);


module.exports = router;