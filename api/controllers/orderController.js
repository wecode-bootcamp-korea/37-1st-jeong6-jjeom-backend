const { orderService } = require('../services')
const {asyncWrap} = require('../utils/error')

const createOrder = asyncWrap(async (req, res) => {
    const userId = req.userId
    const { deliveryInformationId, paymentMethodId, depositDeadline } = req.body;
    
    await orderService.createOrder(userId, deliveryInformationId, paymentMethodId, depositDeadline)
    
    res.status(201).json({message:"order success"})
})

module.exports = {
	createOrder
}