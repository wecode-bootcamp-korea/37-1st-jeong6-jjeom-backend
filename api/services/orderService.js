const { orderDao } = require("../models");

const createOrder = async (deliveryInformationId, paymentMethodId, depositDeadline) => {
    await orderDao.createOrder(deliveryInformationId, paymentMethodId, depositDeadline);
} 

const deliveryInformationOfOder = async (userId, name, phoneNumber, address, arrivalDate, deliveryMethod) => {
    await orderDao.deliveryInformationOfOder(userId, name, phoneNumber, address, arrivalDate, deliveryMethod);
}

const stockInOrder = async (optionProductsId, quantity) => {
    await orderDao.stockInOrder(optionProductsId, quantity);
}

const orderProductsOfOder = async (optionProductsId, orderId) => {
    await orderDao.orderProductsOfOder(optionProductsId, orderId);
}


module.exports = {
    createOrder,
    deliveryInformationOfOder,
    stockInOrder,
    orderProductsOfOder,
}