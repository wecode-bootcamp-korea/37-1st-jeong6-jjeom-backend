const { getProduct } = require('../controllers/categoryController')
const { getProductbyId } = require('../services/categoryService')
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
        From categories
        JOIN product
        on categories.id = product.categories_id 
        where categories.id = ?
        `, [categoriesId]
    )
    return result [0]
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

module.exports = { 
    getCategoryId,
    getProductId
}