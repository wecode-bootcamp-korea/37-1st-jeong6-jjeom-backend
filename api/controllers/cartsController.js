const {cartsService} = require('../services')
const { asyncWrap } = require('../utils/error')

const deleteCart = asyncWrap(async (req,res) => {
    const userId = req.user.id
    const cartIds = req.query.cartId
    
    // if(Array.isarray(cartId)){
    //     for(let i=0; i<cartId.length; i++){
    //     await cartsService.deleteCart(userId, +cartId[i])
    // }}else{
    //     await cartsService.deleteCart(userId, +cartId)
    // }
    await cartsService.deleteCart(userId, cartIds)
    res.status(201).json({messge : "SUCCESS_DELETE_CART"})
});

module.exports = {
    deleteCart,
}
