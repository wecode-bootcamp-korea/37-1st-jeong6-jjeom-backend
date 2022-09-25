const express = require('express');

const router= express.Router();


const userRouter = require('./userRouter');
const cartsRotuer = require('./cartsRouter');

router.use('/users', userRouter);
router.use('/carts', cartsRotuer);

module.exports= router;