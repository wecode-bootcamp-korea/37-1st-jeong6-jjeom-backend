const { productDao } = require('../models')

const getProductById = async(productId) =>{
        return await productDao.getProductById(productId)
}

const getProductsByCategoryId = async(categoryId) => {
        return await productDao.getProductsByCategoryId(categoryId)
}
const getDescriptionByProductId = async(productId) => {
        return await productDao.getDescriptionByProductId(productId)
}
module.exports ={ 
    getProductById,
    getProductsByCategoryId,
    getDescriptionByProductId,
}