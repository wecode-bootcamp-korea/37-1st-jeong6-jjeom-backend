const appDataSource  =require('./datasource')

const getCategoryId = async (categoriesId) => {
    console.log(categoriesId)
    const result = await appDataSource.query(
        `
        SELECT
            product.name,
            product.price,
            product.standard_unit,
            product.tumbnail_url,
            product.anti_bio
        From product
        WHERE product.categories_id = ? 
        `, [categoriesId]
    )
    return result
}

const getProductId = async (categoriesId, productId) => {
    const result = await appDataSource.query(
        `
        SELECT
            p.name,
            p.price,
            p.standard_unit,
            p.description_url,
            p.id
        From product p
        where p.categories_id= ? AND p.id = ?
        `, [categoriesId, productId]
    )
    return result [0]
}
const getDescriptionId = async (productId) => {
    const result = await appDataSource.query(
        `
        SELECT
            product.name,
            product.price,
            product.standard_unit,
            product.description_url,
            product_description.weight, 
            product_description.birth, 
            product_description.expiration,
            product_description.storage, 
            product_id
        From product 
        JOIN product_description 
        on product.id = product_description.id
        where product.id = ?
        `, [productId]
    )
    return result [0]
}

module.exports = { 
    getCategoryId,
    getProductId,
    getDescriptionId
}