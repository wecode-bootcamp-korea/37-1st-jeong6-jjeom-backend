const express = require('express');

const { cartsControllers } = require('../controllers');
const { loginRequired } = require('../utils/auth')
const router = express.Router();

router.post('/post', loginRequired, cartsControllers.addCart)
router.patch('/patch', loginRequired, cartsControllers.updateCart)
router.get('/user', loginRequired, cartsControllers.getCart)
router.delete('/delete', loginRequired, cartsControllers.deleteCart)

module.exports = router;

