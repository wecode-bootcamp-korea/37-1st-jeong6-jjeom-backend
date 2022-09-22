const {userService} = require('../services')
const { asyncWrap } = require('../utils/error')

const signUp =asyncWrap(async (req,res) => {
    const {email, password, phoneNumber, name} = req.body;
  
    if(!email || !password || !phoneNumber || !name) {
        const error = new Error('KEY_ERROR')
        error.statusCode = 400;

        throw error
    }
    await userService.signUp(email, password, phoneNumber, name)

    res.status(200).json({message:"success"});
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