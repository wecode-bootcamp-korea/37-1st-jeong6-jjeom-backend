const express = require('express');
const { orderController } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();

router.post('/deliveryInformation', loginRequired, orderController.deliveryInformationOfOder)
router.post('/oderProducts', loginRequired, orderController.orderProductsOfOder)
router.post('/post', loginRequired, orderController.createOrder)
router.patch('/patch', loginRequired, orderController.stockInOrder)

module.exports = router;