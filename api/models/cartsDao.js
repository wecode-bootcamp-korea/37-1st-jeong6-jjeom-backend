const appDataSource  =require('./datasource')

const deleteCheckCart = async(userId, cartIds) =>{
    
    const deleteCartRows = (await appDataSource.query( 
        `
            DELETE FROM carts
            Where carts.users_id =?
            AND carts.id in (?)
        `, [userId, cartIds]
        )).affectedRows
    
    if (Array.isArray(cartIds)) {
        if (deleteCartRows !== cartIds.length){
            throw new Error ('UNEXPECTED_NUMBER_OF_RECORDS_DELETED')}
    } else {
        if (![0, 1].includes(deleteCartRows)) {
            throw new Error ('UNEXPECTED_NUMBER_OF_RECORDS_DELETED')}
        }
        return deleteCartRows
    }

module.exports = { 
  deleteCheckCart
}