const {productService} = require('../services')
const { asyncWrap } = require('../utils/error')

const getProductByProductsId = asyncWrap(async (req,res) => {
    const { categoriesId, productId } = req.query

    const getProduct = await productService.getProductByProductsId(categoriesId, productId)

    res.status(200).json({getProduct})
});

const getProductsByCategoryId = asyncWrap(async (req,res) => {

    const categoriesId = req.query.categoriesId
    const GetCategory = await productService.getProductsByCategoryId( categoriesId )
    
    res.status(200).json({GetCategory})
});

const getDescriptionByProductId = asyncWrap(async (req,res) => {
    const { productId } = req.query

    const getDescription = await productService.getDescriptionByProductId(productId)

    res.status(200).json({getDescription})
});

module.exports = {
    getProductByProductsId,
    getProductsByCategoryId,
    getDescriptionByProductId
}