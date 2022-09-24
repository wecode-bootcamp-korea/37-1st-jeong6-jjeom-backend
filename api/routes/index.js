const express = require('express')

const router= express.Router();

const userRouter = require('./userRouter')
const productRouter = require('./productRouter.js')

router.use('/users', userRouter);
router.use('/products', productRouter);

module.exports= router;