const { cartsService } = require('../services')
const { catchAsync }  = require('../utils/error')

const cartsGet = catchAsync(async (req, res) => {
	const userId = req.user.id

	const carts = await cartsService.getCarts(userId, optionProductId)

	res.status(200).json({ carts })
})

module.exports = {
	cartsGet
}