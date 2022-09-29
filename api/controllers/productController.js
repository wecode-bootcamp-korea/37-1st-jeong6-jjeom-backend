const { productService } = require('../services')
const { asyncWrap } = require('../utils/error')

const getProductById = asyncWrap(async (req,res) => {
    const { productId }  = req.params

    const getProduct = await productService.getProductById(productId)

    res.status(200).json({getProduct})
});

const getProductsByCategoryId = asyncWrap(async (req,res) => {

    const {categoryId} = req.params
    const result = await productService.getProductsByCategoryId(categoryId)
    
    res.status(200).json({result})
});

const getDescriptionByProductId = asyncWrap(async (req,res) => {
    const  {productId}  = req.params

    const getDescription = await productService.getDescriptionByProductId(productId)

    res.status(200).json({getDescription})
});

module.exports = {
    getProductById,
    getProductsByCategoryId,
    getDescriptionByProductId
}