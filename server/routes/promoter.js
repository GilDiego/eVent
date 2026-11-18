const express = require('express');
const router = express.Router();
const { getAllPromoters, getEventPromoter } = require('../controllers/Promoter/getController');
const { saveInfoPromotor, loginPromoter } = require('../controllers/Promoter/postController');
router.get('/all', getAllPromoters);
router.get('/:id', getEventPromoter);
router.post('/', saveInfoPromotor);
router.post('/login', loginPromoter);
module.exports = router;
