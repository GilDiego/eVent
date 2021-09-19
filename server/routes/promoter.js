const express = require('express');
const router = express.Router();

const {
    saveInfoPromotor,
} = require('../controllers/Promoter/postController');


//POST
router.post('/',saveInfoPromotor);



module.exports = router;