const appDataSource = require('./dataSource')

const getCarts = async (userId, optionProductId) => {
	const result = await appDataSource.query(`
		SELECT 
			c.id,
			c.quantity,
			c.users_id,
			c.option_products_id,  
		FROM carts c
        INNER JOIN users u ON u.id = c.users_id
        INNER JOIN option_products o ON o.id = c.option_products_id
		WHERE u.id = ? AND o.id = ?`,
        [userId, optionProductId]
	)

	return result
}

module.exports = { 
	getCarts
}


