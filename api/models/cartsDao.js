const appDataSource  =require('./datasource')

const deleteCheckCart = async(userId, cartId) =>{
    
    const deleteCartRows = (await appDataSource.query( 
        `
            DELETE FROM carts
            Where carts.users_id =?
            AND carts.id in (?)
        `, [userId, cartId]
        )).affectedRows
            
    if (deleteCartRows !==0 && deleteCartRows !==1){
    throw new Error ('UNEXPECTED_NUMBER_OF_RECORDS_DELETED')}

return deleteCartRows
}

module.exports = { 
  deleteCheckCart
}