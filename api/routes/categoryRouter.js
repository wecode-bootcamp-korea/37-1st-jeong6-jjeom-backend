const express          = require('express');
const { categoryController } = require('../controllers');

const router = express.Router();

router.get('/getCategory', categoryController.getCategory)
router.get('/getProduct', categoryController.getProduct)
router.get('/getDescription',categoryController.getDescription)

module.exports= router;

