const express          = require('express');
const { cartsController } = require('../controllers');
const { loginRequired } = require('../utils/auth')

const router = express.Router();

router.delete('/delete', cartsController.deleteCart)


module.exports= router;
