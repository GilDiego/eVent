const express = require('express');
const router = express.Router();
const { 
    getController,              
    getEventByIdController,
    getElementByCountryAndCity 
} = require('../controllers/Event/getController');

const {
    saveInfoEvent
} = require('../controllers/Event/postController');



//GET
router.get('/main',getController);
router.get('/event/:id',getEventByIdController);
router.get('/event',getElementByCountryAndCity);

//POST
router.post('/event',saveInfoEvent);

module.exports = router;