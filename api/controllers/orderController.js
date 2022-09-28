const { orderService } = require('../services')
const {asyncWrap} = require('../utils/error')

const deliveryInformationOfOder = asyncWrap(async (req, res) => {
    const userId = req.userId
    const { name, phoneNumber, address, arrivalDate, deliveryMethod } = req.body;
    
    await orderService.deliveryInformationOfOder(userId, name, phoneNumber, address, arrivalDate, deliveryMethod)
    
    res.status(201).json({message:"success"})
})

const createOrder = asyncWrap(async (req, res) => {
    const userId = req.userId
    const { deliveryInformationId, paymentMethodId, depositDeadline } = req.body;
    
    await orderService.createOrder(userId, deliveryInformationId, paymentMethodId, depositDeadline)
    
    res.status(201).json({message:"success"})
})

const stockInOrder = asyncWrap(async (req, res) => {
    const userId = req.userId
    const { optionProductsId, quantity } = req.body;
    
    await orderService.createOrder(userId, optionProductsId, quantity)
    
    res.status(201).json({message:"success"})
})

const orderProductsOfOder = asyncWrap(async (req, res) => {
    const { optionProductsId, orderId } = req.body;
    
    await orderService.createOrder(optionProductsId, orderId)
    
    res.status(201).json({message:"success"})
})



module.exports = {
	createOrder,
    stockInOrder,
    deliveryInformationOfOder,
    orderProductsOfOder,
}