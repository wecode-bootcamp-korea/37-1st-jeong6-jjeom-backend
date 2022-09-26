const { cartsServiece } = require('../services')
const {asyncWrap} = require('../utils/error')

const addCart = asyncWrap(async (req, res) => {
    const {optionProductsId, quantity} = req.body
    const userId = req.userId
    const insertId = await cartsServiece.addCart(userId, optionProductsId, quantity)
    
    res.status(201).json({insertId})
})

const updateCart = asyncWrap(async (req, res) => {
    const {optionProductsId, quantity} = req.query
    const userId = req.userId
    const result = await cartsServiece.updateCart(userId, optionProductsId, quantity)
    
    res.status(200).json({result})
})

module.exports = {
	addCart,
    updateCart
}