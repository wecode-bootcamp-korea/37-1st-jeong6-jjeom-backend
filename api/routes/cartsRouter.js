const express = require('express');

const { cartsController } = require('../controllers');
const {loginRequired} = require('../utils/auth')

const router = express.Router();

router.get('/getUserCart', loginRequired, cartsController.getCart)



module.exports= router;