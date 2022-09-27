const { cartsDao } = require("../models");

const getCartbyId = async (userId) => {
    const cart = await cartsDao.getCartsByUserId(userId)
    for(i=0 ; i<cart.length; i=i+1){
       cart[i].price =cart[i].quantity*cart[i].price
    }
    return cart
}

const addCart = async (userId, optionProductsId, quantity) => {
    
    const {cart} = await cartsDao.getCartsExists(userId, optionProductsId);
    if (+cart) {
        const num = await cartsDao.getCartQuantity(userId, optionProductsId);
        quantity += num.quantity;
        return await cartsDao.updateCart (userId, optionProductsId, quantity);
    }
    return await cartsDao.addCart(userId, optionProductsId, quantity);
} 

const updateCart = async (userId, optionProductsId, quantity) => {
    return await cartsDao.updateCart( userId, optionProductsId, quantity )
}


module.exports = {
    addCart,
    updateCart,
    getCartbyId,
}