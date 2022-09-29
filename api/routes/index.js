const express = require('express');
const router = express.Router();

const cartsRouter = require('./cartsRouter');
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');

router.use('/carts', cartsRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/order', orderRouter);

module.exports = router;

