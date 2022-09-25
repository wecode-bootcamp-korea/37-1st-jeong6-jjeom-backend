const express = require('express');
const { cartsControllers } = require('../controllers');

const router = express.Router();

router.get('/', cartsControllers.cartsGet)

module.exports = router;
