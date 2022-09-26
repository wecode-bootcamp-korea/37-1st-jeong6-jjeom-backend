const {cartsService} = require('../services')
const { asyncWrap } = require('../utils/error')

const deleteCart = asyncWrap(async (req,res) => {
    const userId = req.user.id
    const cartIds = req.query.cartId
    
    await cartsService.deleteCart(userId, cartIds)
    res.status(201).json({messge : "SUCCESS_DELETE_CART"})
});

module.exports = {
    deleteCart,
}
