const appDataSource  =require('./datasource')

const getProductsByCategoryId = async (categoryId) => {
    return await appDataSource.query(
        `
        SELECT
            product.name,
            product.price,
            product.standard_unit,
            product.tumbnail_url,
            product.anti_bio
        From product
        WHERE product.categories_id = ? 
        `, [categoryId]
    )
}

const getProductById = async (productId) => {
        
    const thick =await appDataSource.query(
        `
        SELECT op.thick 
        FROM option_products op
        WHERE op.product_id = ? 
        `, [productId]
    )
    const [product] = await appDataSource.query(
        `
        SELECT
            p.name,
            p.price,
            p.standard_unit,
            p.description_url 
        From product p
        WHERE p.id = ?
        `, [productId]
    )
    product.thick =thick
    return product
}

const getDescriptionByProductId = async (productId) => {
    const thick =await appDataSource.query(
        `
        SELECT op.thick 
        FROM option_products op
        WHERE op.product_id = ? 
        `, [productId]
    )
    const [result] = await appDataSource.query(
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
    result.thick=thick
    return result
}

module.exports = { 
    getProductsByCategoryId,
    getProductById,
    getDescriptionByProductId
}