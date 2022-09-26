const express = require('express');
const { cartsControllers } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();

router.post('', loginRequired, cartsControllers.addCart)
router.patch('', loginRequired, cartsControllers.updateCart)

module.exports = router;