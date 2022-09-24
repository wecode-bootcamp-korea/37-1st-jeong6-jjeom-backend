const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();

router.get('/getCategory', productController.getCategory)
router.get('/getProduct', productController.getProduct)
router.get('/getDescription', productController.getDescription)

module.exports= router;
