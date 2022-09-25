const  appDataSource  = require('./datasource')

const getCartsByUserId = async (userId) => {
	const carts = await appDataSource.query(
        `
            SELECT
                c.users_id, 
                p.tumbnail_url,
                p.name,
                p.price,
                p.standard_unit,
                op.thick,
                c.quantity,
                op.product_id,
                c.option_products_id
            FROM Product p
            JOIN option_products op
            ON p.id = op.product_id
            JOIN carts c
            ON c.option_products_id = op.id
            where c.users_id = ?
        `, [userId]
    )
    
    return  carts
}

module.exports = {
    getCartsByUserId
}