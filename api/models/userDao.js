const  appDataSource  = require('./datasource')

const createUser = async (email, password, phoneNumber, name) =>{

    const result = await appDataSource.query(
    `
        INSERT INTO users (
            email,
            password,
            phone_number,
            name
        ) VALUES (?, ?, ?, ?)
    `, [email, password, phoneNumber, name]
    )
    return result
}

const getUserbyId = async (id) => {
    const [result] =  await appDataSource.query(
        `SELECT
            *
        FROM users
        WHERE id = ?`,
        [id]
    )
    return result
}

const getUserbyEmail = async (email) => {
    const [user] = await appDataSource.query(
        `
            SELECT
                id,
                email,
                password,
                phone_number,
                name
            FROM users
            WHERE email=?
        `, [email]
    )
    return user
}

module.exports = {
    createUser,
    getUserbyId,
    getUserbyEmail,
}