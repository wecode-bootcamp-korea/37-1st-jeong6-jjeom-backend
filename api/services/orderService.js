const { createOrder } = require("../models");

const createOrder = async (deliveryInformationId, paymentMethodId, depositDeadline) => {
    await orderDao.createOrder(deliveryInformationId, paymentMethodId, depositDeadline);
} 




module.exports = {
    createOrder,
}