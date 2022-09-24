const express = require('express')

const router= express.Router();

const userRouter = require('./userRouter')
const productRouter = require('./productRouter.js')

router.use('/users', userRouter);
router.use('/categories', productRouter);

module.exports= router;