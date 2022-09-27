const { orderService } = require('../services')
const {asyncWrap} = require('../utils/error')

const creatOrder = asyncWrap(async (req, res) => {
    const {deliveryInformationId, paymentMethodId, } = req.body;
    const userId = req.userId
    
    if (!optionProductsId || !quantity) {
        const error = new Error("KEY ERROR");
        error.statusCode = 400;
        throw error;
    }
    await orderService.addCart(userId, optionProductsId, quantity)
    
    res.status(201).json({message:"add success"})
})

module.exports = {
	creatOrder
}