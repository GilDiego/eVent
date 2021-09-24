const express = require('express');
const router = express.Router();
const { 
    getAllPromoters,
} = require('../controllers/Promoter/getController');
const {
    saveInfoPromotor, 
    loginPromoter,
} = require('../controllers/Promoter/postController');



//GET
 router.get('/all',getAllPromoters);



//POST
router.post('/',saveInfoPromotor);
router.post('/login',loginPromoter);


module.exports = router;