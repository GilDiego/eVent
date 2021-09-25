const express = require('express');
const router = express.Router();
const { 
    getAllPromoters,
    getEventPromoter
} = require('../controllers/Promoter/getController');
const {
    saveInfoPromoter, 
    loginPromoter,
} = require('../controllers/Promoter/postController');



//GET
 router.get('/all',getAllPromoters);
 router.get('/:id',getEventPromoter); 


//POST
router.post('/',saveInfoPromoter);
router.post('/login',loginPromoter);


module.exports = router;