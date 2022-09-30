const express = require('express');
const { orderController } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();

router.post('/makeOrder', loginRequired, orderController.makingOrder)
router.get('/information', loginRequired, orderController.getOrderInfo)
// router.get('/complete', loginRequired, orderController.getCompleteInfo)
// router.delete('/choice', loginRequired, orderController.deleteCart)
router.get('/id', loginRequired, orderController.getOrderId)


module.exports = router;