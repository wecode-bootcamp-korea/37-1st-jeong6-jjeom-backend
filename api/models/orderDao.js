const appDataSource = require("./datasource")

const createOrder = async (deliveryInformationId, paymentMethodId, depositDeadline) => {
    const result = await appDataSource.query(
        `INSERT INTO orders(
            delivery_information_id,
            payment_method_id,
            deposit_deadline
        )VALUES(?, ?, ?)`,
        [deliveryInformationId, paymentMethodId, depositDeadline]
    )
    return result
}

const getOrderPaymentMethod = async (paymentMethodId) =>{
    const [result] = await appDataSource.query(
        `SELECT
            pm.method
            FROM payment_method pm
            WHERE orders.payment_method Id = ? 
            `,[paymentMethodId]
    )
    return result
}

module.exports = {
    createOrder,
    getOrderPaymentMethod,
}