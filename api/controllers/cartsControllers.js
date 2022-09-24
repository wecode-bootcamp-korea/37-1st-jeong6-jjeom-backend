const { cartsService } = require('../services')
const { asyncWrap }  = require('../utils/error')

const cartsGet = asyncWrap(async (req, res) => {
	const userId = req.user.id

	const carts = await cartsService.getCarts(userId, optionProductId)

	res.status(200).json({ carts })
})

module.exports = {
	cartsGet
}