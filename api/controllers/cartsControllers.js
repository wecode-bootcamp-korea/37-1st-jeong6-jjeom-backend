const { cartsServiece } = require('../services')
const {asyncWrap} = require('../utils/error')


const getCart = asyncWrap(async(req, res) =>{
    const userId = req.user.Id
  
    const getCartbyId = await cartsService.getCartbyId(userId)

    res.status(200).json({message : "SUCCESS_GET_CART", getCartbyId})
})

const addCart = asyncWrap(async (req, res) => {
    const {optionProductsId, quantity} = req.body;
    const userId = req.userId
    if (!optionProductsId || !quantity) {
        const error = new Error("KEY ERROR");
        error.statusCode = 400;
        throw error;
    }
    await cartsServiece.addCart(userId, optionProductsId, quantity)
    
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
    await cartsServiece.updateCart(userId, optionProductsId, quantity)
    
    res.status(200).json({message:"update success"})
})

module.exports = {
	addCart,
    updateCart,
    getCart,
}