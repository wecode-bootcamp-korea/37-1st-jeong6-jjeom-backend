const appDataSource = require('./datasource')

const userDao = require('./userDao')
const productDao= require('./productDao')

module.exports = { 
	appDataSource,
	userDao,
	productDao,
}
