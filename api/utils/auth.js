const jwt = require('jsonwebtoken')


const {userDao} = require("../models")

const {asyncWrap} = require('./error')

const loginRequired = asyncWrap(async (req, res, next) => {

    const accessToken = req.headers.authorization
        if(!accessToken) {
            const error= new Error('NEED_TOKEN')
            error.statusCode = 401
            return next(error)
        }
    const payload = await jwt.verify(accessToken, process.env.JWT_SECRET)

    const user = await userDao.getUserbyId(payload.id)

    if(!user){
        const error = new Error('USER_DOES_NOT_EXIST')
        error.statusCode = 404

        return next(error)
    }
    req.userId = user.id;
    next();
})

module.exports = { loginRequired }