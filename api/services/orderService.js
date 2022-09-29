const appDataSource = require('../models/datasource');

const { orderDao } = require('../models');

const makingOrder = async (
  userId,
  optionProductsId,
  name,
  phoneNumber,
  address,
  arrivalDate,
  deliveryMethod,
  paymentMethodId,
  depositDeadline,
  quantity
) => {
  const a = appDataSource.createQueryRunner();

  await a.connect();
  await a.startTransaction();
  try {
    const delivery = await orderDao.createDeliveryInformation(
      a,
      userId,
      name,
      phoneNumber,
      address,
      arrivalDate,
      deliveryMethod
    );
    const order = await orderDao.createOrder(
      a,
      delivery.insertId,
      paymentMethodId,
      depositDeadline
    );
  } catch (err) {
    await a.rollbackTransaction();
    const error = new Error(`ROLLBACK : ${err.message}`);
    error.statusCode = 400;
    throw error;
  } finally {
    await a.release();
  }
};

const getOrderInfo = async (userId, cartId) => {
  return await orderDao.getOrderInfo(userId, cartId);
};

const getCompleteInfo = async (userId, orderId) => {
  const completeInfo = await orderDao.getCompleteInfo(userId, orderId);
  for (i = 0; i < completeInfo.length; i = i + 1) {
    completeInfo[i].price = completeInfo[i].quantity * completeInfo[i].price;
  }
  return completeInfo;
};

const deleteCart = async (userId, cartId) => {
  return await orderDao.deleteCart(userId, cartId);
};

const getOrderId = async (userId) => {
  return await orderDao.getOrderId(userId);
};
module.exports = {
  getOrderInfo,
  getCompleteInfo,
  deleteCart,
  getOrderId,
  makingOrder,
};
