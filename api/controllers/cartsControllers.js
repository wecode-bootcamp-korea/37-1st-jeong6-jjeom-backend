const { cartsService } = require('../services')
const { asyncWrap }  = require('../utils/error')

const cartsGet = asyncWrap(async (req, res) => {
	const { userId, optionProductsId }= req.query
	
	const [cart] = await cartsService.getCarts(userId, optionProductsId)

	res.status(201).json({ cart })
})

module.exports = {
	cartsGet
}