const { cartsDao } = require('../models')

const getCarts = async (userId, optionProductId) => {
	return await cartsDao.getCarts(userId, optionProductId)
}

module.exports = { 
	getCarts
}