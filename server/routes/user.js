const express = require('express');
const router = express.Router();
const { 
    getAllUsers,
    getUserByID
} = require('../controllers/User/getController');
const { 
    postUser 
} = require('../controllers/User/postController');


//GET
router.get('/all',getAllUsers);
router.get('/:id',getUserByID);

//POST
router.post('/',postUser);





module.exports = router;