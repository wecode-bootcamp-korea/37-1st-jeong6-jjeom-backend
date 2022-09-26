const { cartsDao } = require('../models')

const getCartbyId = async (userId) => {
    const cart = await cartsDao.getCartsByUserId(userId)
    for(i=0 ; i<cart.length; i=i+1){
       cart[i].price =cart[i].quantity*cart[i].price
    }
    return cart
}

module.exports ={
    getCartbyId
}