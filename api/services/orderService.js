const appDataSource = require("../models/datasource")

const { orderDao } = require("../models");
const queryRunner = appDataSource.createQueryRunner();

const makingOrder = async (userId, optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod,paymentMethodId, quantity) => {
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try{
        const delivery = await orderDao.createDeliveryInformation(userId, name, phoneNumber, address, arrivalDate, deliveryMethod);
        const order = await orderDao.createOrder(delivery.insertId, paymentMethodId);
        await orderDao.createOrderProducts(optionProductsId, order.insertId, quantity); 
        await orderDao.getStockOfOptionProduct(optionProductsId, quantity);
        await orderDao.deleteCart(userId, optionProductsId);
//qunatity이대로 괞찮은가?
    } catch(err){
        await queryRunner.rollbackTransaction();
        const error = new Error(`ROLLBACK : ${err.message}`);
        error.statusCode = 400;
        throw error;
    } finally{
        //await queryRunner.release();
    }
}

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
    makingOrder,
}

