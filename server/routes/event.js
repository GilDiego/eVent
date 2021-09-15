const express = require('express');
const router = express.Router();
const { getController,              getEventByIdController,
        getElementByCountryAndCity } = require('../controllers/Event/getController')


router.get('/main',getController)

router.get('/event/:id',getEventByIdController)

router.get('/event',getElementByCountryAndCity)


module.exports = router;