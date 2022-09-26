const { productDao } = require('../models')

const getProductByProductId = async(categoriesId, productId) =>{
        return await productDao.getProductById(categoriesId, productId)
}

const getProductsByCategoryId = async(categoriesId) => {
        return await productDao.getProductsByCategoryId(categoriesId)
}
const getDescriptionByProductId = async(productId) => {
    return await productDao.getDescriptionByProductId(productId)
}
module.exports ={ 
    getProductByProductId,
    getProductsByCategoryId,
    getDescriptionByProductId,
}