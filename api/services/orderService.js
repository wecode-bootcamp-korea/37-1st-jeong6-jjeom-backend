const appDataSource = require("../models/datasource")

const { orderDao } = require("../models");

const makingOrder = async (userId, optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod, quantity) => {
    const queryRunner = appDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try{
        const delivery = await orderDao.createDeliveryInformation(queryRunner, userId, name, phoneNumber, address, arrivalDate, deliveryMethod);
        const order = await orderDao.createOrder(queryRunner, delivery.insertId);

    if(Array.isArray(optionProductsId)){
        for(i=0 ; i<optionProductsId.length ; i++){
            console.log(i)
                await orderDao.createOrderProducts(queryRunner, optionProductsId[i], order.insertId, quantity[i]); 
                await orderDao.getStockOfOptionProduct(queryRunner, optionProductsId[i], quantity[i]);
                await orderDao.deleteCartAtOder(queryRunner, userId, optionProductsId[i]);
            }}   
        console.log(userId, optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod, quantity)
        await orderDao.createOrderProducts(queryRunner, optionProductsId, order.insertId, quantity)
        console.log("a")
        await orderDao.getStockOfOptionProduct(queryRunner, optionProductsId, quantity)
        console.log("b")
        await orderDao.deleteCartAtOder(queryRunner, userId, optionProductsId)
} catch(err){
    await queryRunner.rollbackTransaction();
    const error = new Error(`ROLLBACK : ${err.message}`);
    error.statusCode = 400;
    throw error;
} finally{
    await queryRunner.release();
}}

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

