const express = require('express');
const { orderController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const router = express.Router();

router.get('/information', loginRequired, orderController.getOrderInfo)
router.get('/complet', loginRequired, orderController.getCompleteInfo)

module.exports = router