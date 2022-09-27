const express = require('express');
const { orderControllers } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();

router.post('/post', loginRequired, cartsControllers.addCart)
router.post('/post', loginRequired, cartsControllers.createOrder)
router.patch('/patch', loginRequired, cartsControllers.updateCart)

module.exports = router;