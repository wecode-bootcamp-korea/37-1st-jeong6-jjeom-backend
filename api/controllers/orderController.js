const { orderService } = require('../services')
const {asyncWrap} = require('../utils/error')


const makingOrder = asyncWrap(async (req, res) => {
    const userId = req.userId;
    const { optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod,paymentMethodId,depositDeadline, quantity } = req.body;
    
    await orderService.makingOrder(userId, optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod,paymentMethodId,depositDeadline, quantity);
    
    res.status(201).json({message:"order_success"})
})



module.exports = {
    makingOrder
}