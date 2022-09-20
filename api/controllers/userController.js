const {userService} = require('../services')
const { asyncWrap } = require('../utils/error')

const signUp =asyncWrap(async (req,res) => {
    const {email, password, phonenumber, name} = req.body;

    if(!email || !password || !phonenumber || !name) {
        const error = new Error('KEY_ERROR')
        error.statusCode = 400;

        throw error
    }
    const newId = await userService.signUp(email, password, phonenumber, name);

    res.status(200).json({ID : newId});
});

const signIn = asyncWrap(async (req, res) => {
    const {email, password} = req.body;

    const accessToken = await userService.signIn(email, password)

    res.status(200).json({ accessToken })
})

module.exports = {
    signUp,
    signIn
}