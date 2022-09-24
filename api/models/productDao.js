const appDataSource  =require('./datasource')

const getCategoryId = async (categoriesId) => {
    const result = await appDataSource.query(
        `
        SELECT
        product.name,
        product.price,
        product.standard_unit,
        product.tumbnail_url,
        product.anti_bio
        From product
        JOIN categories
        ON categories.id = product.categories_id
        WHERE categories.id = ?
        `, [categoriesId]
    )
    return result[0]
}

const getProductId = async (categoriesId, productId) => {
    const result = await appDataSource.query(
        `
        SELECT
            product.name,
            product.price,
            product.standard_unit,
            product.description_url,
        From categories
        JOIN product
        on categories.id = product.categories_id 
        where categories.id = ?
        AND product.id = ?
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