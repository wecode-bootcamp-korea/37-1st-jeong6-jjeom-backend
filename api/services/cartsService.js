const { cartsDao } = require("../models");

const addCart = async (userId, optionProductsId, quantity) => {

    return await cartsDao.addCart(userId, optionProductsId, quantity)
}


module.exports = {
    addCart
}