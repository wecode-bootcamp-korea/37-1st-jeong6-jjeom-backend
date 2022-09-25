const { cartsDao } = require('../models')

const  deleteCart= async(userId, cartId) =>{
        return await cartsDao.deleteCheckCart(userId, cartId)
}

module.exports ={ 
    deleteCart
}