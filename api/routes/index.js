const express = require('express')
// app.use(cors());
const router = express.Router();

const cartsRouter = require('./cartsRouter');

router.use('/carts', cartsRouter);

module.exports = router;
