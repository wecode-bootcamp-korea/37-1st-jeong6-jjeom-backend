const appDataSource  =require('./datasource')

const getProductsByCategoryId = async (categoryId) => {
    const result = await appDataSource.query(
        `
        SELECT
            categories.banner_url,
            product.id,
            product.name,
            product.price,
            product.standard_unit,
            product.tumbnail_url,
            product.anti_bio
        From product
        JOIN categories ON product.categories_id = categories.id
        WHERE product.categories_id = ? 
        `, [categoryId]
    )
    return result
}

const getProductById = async (productId) => {
        
    const thick =await appDataSource.query(
        `
        SELECT op.thick 
        FROM option_products op
        WHERE op.product_id = ? 
        `, [productId]
    )
    const optionProductsId = await appDataSource.query(
        `
        SELECT op.id
        FROM option_products op
        WHERE op.product_id=?
        `,[productId]
    )
    const [product] = await appDataSource.query(
        `
        SELECT
            p.name,
            p.id,
            p.tumbnail_url,
            p.price,
            p.standard_unit,
            p.description_url,
            option_products.id as optionid
        From product p
        JOIN option_products
        ON option_products.product_id = p.id
        WHERE p.id = ?
        `, [productId]
    )
    product.optionProductsId=optionProductsId
    product.thick =thick
    return product
}

const getDescriptionByProductId = async (productId) => {
    const thick =await appDataSource.query(
        `
        SELECT 
            op.thick 
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


const updateOption = async (productId )=> {
    const result = await queryRunner.query(
        `UPDATE
            option_products
        SET
            stock = stock - ?
        WHERE id = ?
        `,
        [optionProductsId, quantity]
    )
    return result
}
module.exports = { 
    getProductsByCategoryId,
    getProductById,
    getDescriptionByProductId,
    updateOption
}