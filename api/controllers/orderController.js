const { orderService } = require('../services')
const {asyncWrap} = require('../utils/error')

const makingOrder = asyncWrap(async (req, res) => {
    const userId = req.userId;
    const { optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod,paymentMethodId, quantity } = req.body;
    
    await orderService.makingOrder(userId, optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod,paymentMethodId,quantity);
    
    res.status(201).json({message:"order_success"})
})

const getOrderInfo = asyncWrap(async(req,res) => {
    const userId = req.userId
    const {cartId} =req.query.cartId   
    
    if (!cartId) {
        const error = new Error("KEY ERROR");
        error.statusCode = 400;
        throw error;
    }

    const orderInfo = await orderService.getOrderInfo(userId, cartId)
    
    res.status(200).json({message:"get_info_success", orderInfo})
});

const getCompleteInfo = asyncWrap(async(req,res) => {
    const userId = req.userId
    
    const completeInfo = await orderService.getCompleteInfo(userId)
    res.status(200).json({completeInfo})
})

const deleteCart = asyncWrap(async(req,res) => {
    const userId = req.userId
    const { cartId } = req.query.cartId

    await orderService.deleteCart(userId, cartId)
    
    res.status(200).json({message : "SUCCESS_DELETE"})
})

const getOrderId = asyncWrap(async (req, res) => {
    const userId = req.userId
     
    const orderId = await orderService.getOrderId(userId)

    res.status(200).json({orderId})
})
module.exports = {
    makingOrder,
   getOrderInfo, 
   getCompleteInfo,
   deleteCart,
   getOrderId,
}
