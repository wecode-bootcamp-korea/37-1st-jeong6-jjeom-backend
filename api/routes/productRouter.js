const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();


router.get('/categories', productController.getCategory);
router.get('/descriptionUrl', productController.getProduct);
router.get('/productDescription', productController.getDescription);

module.exports= router;

