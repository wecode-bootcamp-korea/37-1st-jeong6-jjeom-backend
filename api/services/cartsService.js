const { cartsDao } = require("../models");

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
    updateCart
}