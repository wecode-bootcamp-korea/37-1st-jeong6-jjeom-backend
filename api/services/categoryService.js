const { categoryDao } = require('../models')

const getProductbyId = async(categoriesId, productId) =>{
        return await categoryDao.getProductbyId(categoriesId, productId)
}

const getCategorybyId = async(categoriesId) => {
        return await categoryDao.getCategorybyId(categoriesId)
}
module.exports ={ 
    getProductbyId,
    getCategorybyId
}