const {cartsService} = require('../services')
const { asyncWrap } = require('../utils/error')

const getCart = asyncWrap(async(req, res) =>{
    const userId = req.user.Id
  
    const getCartbyId = await cartsService.getCartbyId(userId)

    res.status(200).json({message : "SUCCESS_GET_CART", getCartbyId})
})


module.exports = {
    getCart
}