const express = require('express');
const { cartsControllers } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();

router.post('', loginRequired, cartsControllers.addCart)

module.exports = router;