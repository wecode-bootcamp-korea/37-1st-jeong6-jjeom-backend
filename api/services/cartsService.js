const { cartsDao } = require('../models')

const getCartbyId = async (userId) => {
    return await cartsDao.getCartsByUserId(userId)
}
module.exports ={
    getCartbyId
}