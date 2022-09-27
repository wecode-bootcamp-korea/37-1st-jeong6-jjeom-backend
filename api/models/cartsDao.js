const appDataSource = require("./datasource")

const addCart = async (userId, optionProductsId, quantity) => {
    const result = await appDataSource.query(
        `INSERT INTO carts(
            users_id,
            option_products_id,
            quantity
        )VALUES(?, ?, ?)`,
        [userId, optionProductsId, quantity]
    )
    return result
}

const getCartQuantity = async (userId, optionProductsId) =>{
    const [result] = await appDataSource.query(
        `SELECT
            quantity
            FROM carts
            WHERE users_id = ? AND option_products_id = ?`,
            [userId, optionProductsId]
    )
    return result
}

const updateCart = async (userId, optionProductsId, quantity) => {
    return await appDataSource.query(
        `UPDATE carts SET
            quantity = ?
            WHERE users_id = ? AND option_products_id = ?`,
            [quantity, userId, optionProductsId, ]
    )
}

const getCartsExists = async (userId, optionProductsId) => {
    const [result] = await appDataSource.query(
        `SELECT EXISTS(
            SELECT * 
            FROM carts
            WHERE users_id = ? AND option_products_id = ?) AS cart`,
            [userId, optionProductsId ]
    )
    return result
}


module.exports = {
    addCart,
    getCartsExists,
    getCartQuantity,
    updateCart
}