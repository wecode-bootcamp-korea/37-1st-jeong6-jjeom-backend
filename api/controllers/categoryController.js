const {categoryService} = require('../services')
const { asyncWrap } = require('../utils/error')

const getCategory = asyncWrap(async (req,res) => {
    const { categoriesId } = req.body
    
    const GetCategory = await categoryService.getCategorybyId(categoriesId)
    
    res.status(200).json({GetCategory})
});

module.exports = {
    getCategory
}