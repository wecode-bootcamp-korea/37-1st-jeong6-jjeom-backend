const { categoryDao } = require('../models')

const getCategorybyId = async(categoriesId) =>{
        return await categoryDao.getCategoryId(categoriesId)
}
module.exports ={ 
    getCategorybyId
}