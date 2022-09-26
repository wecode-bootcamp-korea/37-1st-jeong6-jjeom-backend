const { cartsDao } = require('../models')

const  deleteCart= async(userId, cartIds) =>{
        const deleteCart = await cartsDao.deleteCheckCart(userId, cartIds)
        if (deleteCart == 0){
            const err = new Error('NO_CARTS_TO_DELETE')
            err.statusCode = 404;
            
            throw err;
        }
}

module.exports ={ 
    deleteCart
}