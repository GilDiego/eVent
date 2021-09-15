const express = require('express');
const router = express.Router();
const testcontroller = require('../controllers/testcontroller');
const testcontroller2 = require('../controllers/testcontroller2');


router.get('/prueba',
    testcontroller.controller
)

router.get('/prueba3',
    testcontroller.controller3
)

router.get('/prueba2',
    testcontroller2.testcontroller2
)

module.exports = router;
