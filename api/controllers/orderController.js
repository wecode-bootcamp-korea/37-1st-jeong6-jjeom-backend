const { orderService } = require('../services')
const {asyncWrap} = require('../utils/error')

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

module.exports = {
   getOrderInfo, 
   getCompleteInfo,
}