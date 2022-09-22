const {categoryService} = require('../services')
const { asyncWrap } = require('../utils/error')

const getProduct = asyncWrap(async (req,res) => {
    const { categoriesId, productId } = req.body
    
    const getProduct = await categoryService.getProductbyId(categoriesId, productId)
    
    res.status(200).json({GetProduct})
});

const getCategory = asyncWrap(async (req,res) => {
    const { categoriesId } = req.body
    
    const GetCategory = await categoryService.getCategorybyId( categoriesId )
    
    res.status(200).json({GetCategory})
});


module.exports = {
    getProduct,
    getCategory
}