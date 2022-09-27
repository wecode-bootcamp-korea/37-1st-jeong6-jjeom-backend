const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();


router.get('/:categoryId/list', productController.getProductsByCategoryId);
router.get('/:productId', productController.getProductById);
router.get('/:productId/description', productController.getDescriptionByProductId);

module.exports= router;

