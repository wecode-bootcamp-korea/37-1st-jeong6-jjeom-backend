const appDataSource = require('./dataSource')

const getCarts = async (userId, optionProductId) => {
	console.log(userId, optionProductId)
	const result = await appDataSource.query(`
		SELECT
			*
		FROM carts
		WHERE users_id = ? AND option_products_id = ?`,
        [userId, optionProductId]
	)
	return result
}

module.exports = { 
	getCarts
}


