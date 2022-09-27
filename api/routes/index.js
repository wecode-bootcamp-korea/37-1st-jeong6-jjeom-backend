const express = require('express')
const router = express.Router();

const cartsRouter = require('./cartsRouter');
const userRouter = require('./userRouter')
const productRouter = require('./productRouter.js')

router.use('/carts', cartsRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);

module.exports= router;