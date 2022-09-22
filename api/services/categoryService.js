const { categoryDao } = require('../models')

const getProductbyId = async(categoriesId, productId) =>{
        return await categoryDao.getProductId(categoriesId, productId)
}

const getCategorybyId = async(categoriesId) => {
        return await categoryDao.getCategoryId(categoriesId)
}
const getDescriptionbyId = async(productId) => {
    return await categoryDao.getDescriptionId(productId)
}
module.exports ={ 
    getProductbyId,
    getCategorybyId,
    getDescriptionbyId
}