const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Fetches a user from the database based on the provided email address.
 *
 * @async
 * @function login
 * @param {string} email - The email address of the user attempting to log in.
 * @returns {Promise<Object|null>} - Returns the user object if a user with the 
 *                                   given email exists, or null if no user is found.
 **/

async function login(email){
    const user = await prisma.users.findFirst({
        where: {
            email: email.toString()    
        }
    });
    return user;
}

/** 
 * Creates a new user in the database based on the provided user details.
 *
 * @async
 * @function register
 * @param {Object} user - An object containing the user's details.
 * @param {string} user.name - The name of the user to be registered.
 * @param {string} user.email - The email address of the user to be registered.
 * @param {string} user.password - The hashed password of the user to be registered.
 * @returns {Promise<Object>} - Returns the newly created user object from the database.
 **/

async function register(user){

    const newUser = await prisma.users.create({
        data: {
            name: user.name,
            email: user.email,
            password: user.password
        }
    });
    return newUser;
}

module.exports = {login,register};