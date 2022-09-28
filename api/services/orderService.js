const { orderDao } = require('../models')

const getOrderInfo = async(userId, cartId) =>{
    return await orderDao.getOrderInfo(userId, cartId)
}

const getCompleteInfo = async(userId, orderId) => {
    const completeInfo = await orderDao.getCompleteInfo(userId, orderId)
    for(i=0 ; i<completeInfo.length; i=i+1){
        completeInfo[i].price =(
            completeInfo[i].quantity*completeInfo[i].price
        )
    }
    return completeInfo
}

const deleteCart = async(userId, cartId) => {
    return await orderDao.deleteCart(userId, cartId)
}

const getOrderId = async(userId) => {
    return await orderDao.getOrderId(userId)
}
module.exports = {
    getOrderInfo,
    getCompleteInfo,
    deleteCart,
    getOrderId,
}
