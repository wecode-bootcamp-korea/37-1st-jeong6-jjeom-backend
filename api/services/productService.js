const { productDao } = require('../models')

const getProductbyId = async(categoriesId, productId) =>{
        return await productDao.getProductId(categoriesId, productId)
}

const getCategorybyId = async(categoriesId) => {
        return await productDao.getCategoryId(categoriesId)
}
const getDescriptionbyId = async(productId) => {
    return await productDao.getDescriptionId(productId)
}
module.exports ={ 
    getProductbyId,
    getCategorybyId,
    getDescriptionbyId
}