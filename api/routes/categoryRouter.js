const express          = require('express');
const { categoryController } = require('../controllers');

const router = express.Router();

router.get('/get', categoryController.getCategory)


module.exports= router;

