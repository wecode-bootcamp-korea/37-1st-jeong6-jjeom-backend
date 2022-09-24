const express            = require('express');
const { cartsControllers } = require('../controllers');

const router = express.Router();

router.post('', cartsControllers.cartsGet)

module.exports = router;
