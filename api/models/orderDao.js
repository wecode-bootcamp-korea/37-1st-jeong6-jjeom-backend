const { cartsControllers } = require("../controllers")
const appDataSource = require("./datasource")

const deliveryInformationOfOder = async (userId, name, phoneNumber, address, arrivalDate, deliveryMethod) => {
    const result = await appDataSource.query(
        `INSERT INTO delivery_information(
            users_id,
            name,
            phone_number,
            address,
            arrival_date,
            delivery_method
        )VALUES(?, ?, ?, ?, ?, ?)`,
        [userId, name, phoneNumber, address, arrivalDate, deliveryMethod]
    )
    return result
}

const createOrder = async (deliveryInformationId, paymentMethodId, depositDeadline) => {
    const result = await appDataSource.query(
        `INSERT INTO orders(
            delivery_information_id,
            payment_method_id,
            deposit_deadline,
            order_status_id
        )VALUES(?, ?, ?, 1)`,
        [deliveryInformationId, paymentMethodId, depositDeadline]
    )
    return result
}

const orderProductsOfOder = async (optionProductsId, orderId, quantity) =>{
    const result = await appDataSource.query(
        `INSERT INTO order_products(
            option_products_id,
            order_id,
            quantity,
            option_products_status_id
        )VALUES(?, ?, ?, 1)`,
        [optionProductsId, orderId]
    )
    return result
}


const stockInOrder = async (optionProductsId, quantity) => {
    const result = await appDataSource.query(
        `UPDATE
            option_products
        SET
            stock = stock - ?
        WHERE id = ?
        `,
        [optionProductsId, quantity]
    )
    return result
}

const deleteCart = async (userId, optionProductsId) => {
    const result = await appDataSource.query(
        `DELETE FROM carts
        WHERE users_id = ?
        AND option_products_id = ?`,
        [userId, optionProductsId]
    )
    return result
}


module.exports = {
    createOrder,
    deliveryInformationOfOder,
    stockInOrder,
    orderProductsOfOder,
    deleteCart,
}