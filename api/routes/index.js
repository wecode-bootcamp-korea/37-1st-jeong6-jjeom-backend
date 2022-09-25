const express = require('express')
const router= express.Router();

const cartsRouter = require('./cartsRouter');
const userRouter = require('./userRouter')

router.use('/carts', cartsRouter);
router.use('/users', userRouter);

module.exports= router;