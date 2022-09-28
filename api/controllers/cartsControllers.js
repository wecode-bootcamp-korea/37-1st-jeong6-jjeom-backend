const { cartsService } = require('../services')
const {asyncWrap} = require('../utils/error')

const addCart = asyncWrap(async (req, res) => {
    const {optionProductsId, quantity} = req.body;
    const userId = req.userId
    if (!optionProductsId || !quantity) {
        const error = new Error("KEY ERROR");
        error.statusCode = 400;
        throw error;
    }
    await cartsService.addCart(userId, optionProductsId, quantity)
    
    res.status(201).json({message:"add success"})
})

const updateCart = asyncWrap(async (req, res) => {
    const {optionProductsId, quantity} = req.query
    const userId = req.userId

    if (!optionProductsId || !quantity) {
        const error = new Error("KEY ERROR");
        error.statusCode = 400;
        throw error;
    }
    await cartsService.updateCart(userId, optionProductsId, quantity)
    
    res.status(200).json({message:"update success"})
})

module.exports = {
	addCart,
    updateCart
}