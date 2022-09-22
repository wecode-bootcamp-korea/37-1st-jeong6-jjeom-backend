const express          = require('express');
const { categoryController } = require('../controllers');

const router = express.Router();

router.get('/getCategorybyId', categoryController.getCategory)
router.get('/getProductbyId', categoryController.getProduct)


module.exports= router;

