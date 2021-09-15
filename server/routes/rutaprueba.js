const express = require('express');
const router = express.Router();
const testcontroller = require('../controllers/testcontroller');

router.get('/',
    testcontroller.controller
)

module.exports = router;
