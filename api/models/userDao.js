const  appDataSource  = require('./datasource')

const createUser = async (email, password, phonenumber, name) =>{

    const result = await appDataSource.query(
    `
        INSERT INTO users (
            email,
            password,
            phonenumber,
            name
        ) VALUES (?, ?, ?, ?)
    `, [email, password, phonenumber, name]
    )
    return result.insertId
}

const getUserbyEmail = async (email) => {
    const user = await appDataSource.query(
        `
            SELECT
                email,
                password,
                phonenumber,
                name
            FROM users
            WHERE email=?
        `, [email]
    )
    return user
}

module.exports = {
    createUser,
    getUserbyEmail
}