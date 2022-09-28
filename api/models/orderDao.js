const appDataSource = require('./datasource') 

const getOrderInfo = async(userId, cartId)=>{
    const result = await appDataSource.query(
        `
            SELECT 
                u.name,
                u.phone_number,
                u.email,
                p.name,
                p.standard_unit,
                p.price,
                op.thick,
                c.quantity
                u.id
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
    return result   
}

const getOrderId = async(userId) => {
    `
        SELECT
            orders.id
        FROM orders o
        JOIN delivery_information di
        ON o.delivery_information_id = di.id
        JOIN users u
        ON u.id = di.users_id
        WHERE u.id = ?
    `, [userId]
}

const getCompleteInfo =async(userId, orderId)=>{
    const result = await appDataSource.query(
        `
        SELECT 
            o.deposit_deadline,
            op.quantity,
            p.price
        FROM orders o
        JOIN delivery_information di
        ON o.delivery_information_id = di.id
        JOIN users u
        ON u.id = di.users_id
        JOIN order_products op
        ON o.id = op.order_id
        JOIN option_products opp
        on opp.id = op.order_products_id  
        join product p
        on opp.product_id = p.id
        where u.id = ?
        AND o.id in (?)
        `, [userId, orderId]
    )
    return result 
}

const deleteCart = async(userId, cartId) => {
    const deleteCartRows = (await  appDataSource.query(
        `
            DELETE FROM carts
            WHERE user_id = ?
            AND   id = ?
        `, [userId, cartId]
        )). affectedRows
    if (Array.isArray(cartId)){
        if(cartId.length !== deleteCartRows) {
            throw new Error ('UNEXPECTED_NUMBER_OF_CARTS_DELETED')}
        }
    else {if(!(0,1).includes(deleteCartRows)){
            throw new Error ('UNEXPECTED_NUMBER_OF_CARTS_DELETED')}
        }
    return deleteCartRows
    }


module.exports = {
    getOrderInfo,
    getCompleteInfo,
    deleteCart,
    getOrderId,
}