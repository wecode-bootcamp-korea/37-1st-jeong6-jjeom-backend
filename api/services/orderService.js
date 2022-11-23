const appDataSource = require("../models/datasource")

const { orderDao } = require("../models");
const { response } = require("express");

const makingOrder = async (userId, optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod, quantity) => {
    const queryRunner = appDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try{
        const delivery = await orderDao.createDeliveryInformation(queryRunner, userId, name, phoneNumber, address, arrivalDate, deliveryMethod);
        const order = await orderDao.createOrder(queryRunner, delivery.insertId);
        for(i=0 ; i<optionProductsId.length ; i++){
                await orderDao.createOrderProducts(queryRunner, optionProductsId[i], order.insertId, quantity[i]); 
                await orderDao.getStockOfOptionProduct(queryRunner, optionProductsId[i], quantity[i]);
                await orderDao.deleteCartAtOder(queryRunner, userId, optionProductsId[i]);
                await orderDao.getCompleteInfo(queryRunner, userId, optionProductsId[i]);
    }
    await queryRunner.commitTransaction()
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

const getOrderId = async(userId) => {
    return await orderDao.getOrderId(userId)
}
module.exports = {
    getOrderInfo,
    getOrderId,
    makingOrder,
}

