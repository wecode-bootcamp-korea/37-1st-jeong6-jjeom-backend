const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();


router.get('/list', productController.getProductsByCategoryId);
router.get('/description', productController.getProductByProductsId);
router.get('/productDescription', productController.getDescriptionByProductId);

module.exports= router;

