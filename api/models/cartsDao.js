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

module.exports = {
    addCart
}