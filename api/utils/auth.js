const jwt = require('jsonwebtoken')
//jwt 인스톨 필요
const {userService} =require('../services')

const {asyncWrap} = require('./error')

const loginRequired = asyncWrap(async (req, res, next) => {

    const accessToken = req.headers.authorization

        if(!accessToken) {
            const error= new Error('NEED_TOKEN')
            error.statusCode = 401

            return next(error)
        }
    const payload = await jwt.verify(accessToken, process.env.JWT_SECRET)

    const user = await userService.getUserbyId(payload)

    if(!user){
        const error = new Error('USER_DOES_NOT_EXIST')
        error.statusCode = 404

        return next(error)
    }
    req.user = user;
    next();
})

module.exports = { loginRequired }