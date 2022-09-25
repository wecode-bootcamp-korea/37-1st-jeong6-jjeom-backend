const { cartsDao } = require('../models')

const getCartbyId = async (userId) => {
    const result = await cartsDao.getCartsByUserId(userId)
    if(result ===undefined){
        const err = new Error('CART_NO_EXIST');
        err.statusCode = 404;

        throw err;
    }
}
module.exports ={
    getCartbyId
}