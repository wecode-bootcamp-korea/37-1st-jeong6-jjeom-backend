const appDataSource = require("../models/datasource")

const { orderDao } = require("../models");
const queryRunner = appDataSource.createQueryRunner();

const makingOrder = async (userId, optionProductsId, name, phoneNumber, address, arrivalDate, deliveryMethod,paymentMethodId,depositDeadline, quantity) => {
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try{
        const delivery = await orderDao.deliveryInformationOfOder(userId, name, phoneNumber, address, arrivalDate, deliveryMethod);
        const order = await orderDao.createOrder(delivery.insertId, paymentMethodId, depositDeadline);
        await orderDao.orderProductsOfOder(optionProductsId, order.insertId, quantity); 
        await orderDao.stockInOrder(optionProductsId, quantity);
        await orderDao.deleteCart(userId, optionProductsId);
        
    } catch(err){
        await queryRunner.rollbackTransaction();
        const error = new Error(`ROLLBACK : {err.message}`);
        error.statusCode = 400;
        throw error;
    } finally{
        await queryRunner.release();
    }
}



module.exports = {
    makingOrder
}