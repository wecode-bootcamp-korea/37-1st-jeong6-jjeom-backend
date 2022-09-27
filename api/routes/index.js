const express = require('express')
const router = express.Router();

const cartsRouter = require('./cartsRouter');
const userRouter = require('./userRouter')
const productRouter = require('./productRouter.js')
const orderRouter = require('./orderRouter.js')

router.use('/carts', cartsRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/order', orderRouter);

module.exports= router;