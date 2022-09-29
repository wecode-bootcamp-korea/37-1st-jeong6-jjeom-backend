const appDataSource = require("./datasource")
const { query } = require('express');

const createDeliveryInformation = async (queryRunner, userId, name, phoneNumber, address, arrivalDate, deliveryMethod) => {
    const result = await queryRunner.query(
        `INSERT INTO delivery_information(
            users_id,
            name,
            phone_number,
            address,
            arrival_date,
            delivery_method
        )VALUES(?, ?, ?, ?, ?, ?)`,
        [userId, name, phoneNumber, address, arrivalDate, deliveryMethod]
    );
    return result;
};

const createOrder = async (queryRunner, deliveryInformationId) => {
    const result = await queryRunner.query(
        `INSERT INTO orders(
            delivery_information_id,
            order_status_id
        )VALUES(?, 1)`,
        [deliveryInformationId]
    );
    return result;
};

const createOrderProducts = async (queryRunner, optionProductsId, orderId, quantity) =>{
    const result = await queryRunner.query(
        `INSERT INTO order_products(
            option_products_id,
            order_id,
            quantity,
            order_products_status_id
        )VALUES(?, ?, ?, 1)`,
        [optionProductsId, orderId, quantity]
    );
    return result;
};


const getStockOfOptionProduct = async (queryRunner, optionProductsId, quantity) => {
    const result = await queryRunner.query(
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

const deleteCartAtOder = async(queryRunner, userId, optionProductsId) => {
    const deleteCartRows = await queryRunner.query(
        `
            DELETE FROM carts
            WHERE users_id = ?
            AND   option_products_id = ?
        `, [userId, optionProductsId]
        )
    // .affectedRows
    // if (Array.isArray(optionProductsId)){
    //     if(optionProductsId.length !== deleteCartRows) {
    //         throw new Error ('UNEXPECTED_NUMBER_OF_CARTS_DELETED')}
    //     }
    // else {
    //     if (!(0,1).includes(`${deleteCartRows}`)){
    //         throw new Error ('UNEXPECTED_NUMBER_OF_CARTS_DELETED')
    //     }
    return deleteCartRows
    }

const getOrderInfo = async(userId, cartId)=>{
    const result = await appDataSource.query(
        `
            SELECT
                u.id,
                u.name as userName,
                u.phone_number,
                u.email,
                p.name,
                p.standard_unit,
                p.price,
                op.thick,
                c.quantity
            FROM product p
            JOIN option_products op
            ON p.id = op.id
            JOIN carts c
            ON c.option_products_id = op.id 
            JOIN users u
            ON u.id = c.users_id
            WHERE
            u.id = ?
            AND
            c.id IN (?)
        `,[userId, cartId]
    )
    console.log(result)
    return result   
}

const getOrderId = async(userId) => {
    `
        SELECT
            o.id
        FROM orders o
        JOIN delivery_information di
        ON o.delivery_information_id = di.id
        JOIN users u
        ON u.id = di.users_id
        WHERE u.id = ?
    `, [userId]
}

const getCompleteInfo =async(userId, optionProductsId)=>{
    const result = await queryrunner.query(
        `
        SELECT
            DATE_SUB(di.arrival_date, interval 1 day),
            op.quantity,
            p.price
        FROM option_products
        JOIN products
        ON option_products.product_id = products.id
        JOIN order_products
        ON option_produts.id = order_products.option_products_id
        JOIN orders
        ON order_products.order_id = orders.id
        JOIN delivery_information
        ON orders.delivery_information_id = delivery_information.id
        JOIN users
        ON delivery_information.users_id = users.id
        WHERE users.id = ?
        AND option_products.id in (?)
        `, [userId, optionProductsId]
    )
    return result
}

module.exports = {
    getOrderInfo,
    getCompleteInfo,
    getOrderId,
    deleteCartAtOder,
    createOrder,
    createDeliveryInformation,
    getStockOfOptionProduct,
    createOrderProducts,
}
