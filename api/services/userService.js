const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')


const { userDao } = require('../models')

const validatePassword = (password) => {
    const passwordRegex = /^.{8,20}$/
        //영문 숫자 8개이상 20개이하
    if(!passwordRegex.test(password)) {
        const error = new Error('INVALID_PASSWORD')
        error.statusCode = 400

        throw error
    }
}

const validateEmail = (email) => {
	const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i


	if (!emailRegex.test(email)) {
		const error = new Error('INVALID_EMAIL')
		error.statusCode = 400

		throw error
	}
}

const validatePhoneNumber =  (phoneNumber) => {
    const phonenumberRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/

    if (!phonenumberRegex.test(phoneNumber)) {
        const error = new Error ('INVALID_PHONENUMBER')
        error.statusCode =400

        throw Error
    }
}

const hashedPassword = async(plainPassword) =>{
    const saltRounds = 8
    const saltingPassword =await bcrypt.genSalt(saltRounds);

    return await bcrypt.hash(plainPassword, saltingPassword); 
}

const getUserbyId = async(id) => {
    return await userDao.getUserbyId(id)
}

const signUp= async (email, password, phoneNumber, name) =>{
    validateEmail(email)
    validatePassword(password)
    validatePhoneNumber(phoneNumber)

    const hashPassword = await hashedPassword(password)

    return await userDao.createUser(email, hashPassword, phoneNumber, name)
}

const signIn = async (email, password) => {
    validateEmail(email)
    validatePassword(password)

    const user = await userDao.getUserbyEmail(email)

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        const error = new Error('WRONG_PASSWORD')
        error.statusCode =401
        
        throw error
    }

	const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, 
		{ 
			algorithm: process.env.ALGORITHM, 
			expiresIn: process.env.JWT_EXPIRES_IN 
		}
	)
	return accessToken
}

module.exports ={
    signUp,
    signIn,
    getUserbyId
}