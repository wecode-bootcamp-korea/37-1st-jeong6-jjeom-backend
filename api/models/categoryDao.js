const appDataSource  =require('./datasource')

const getCategoryId = async (categoriesId) => {
    const result = await appDataSource.query(
        `
        SELECT
            p.name,
            p.price,
            p.standard_unit,
            p.tumbnail_url,
            p.description_url,
            p.anti_bio
        From categories as c
        JOIN product as p
        on c.id = p.categories_id
        `, [categoriesId]
    )
    return result[0]
}

module.exports = { 
    getCategoryId
}