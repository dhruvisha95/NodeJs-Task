const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function login(email){
    const user = await prisma.users.findFirst({
        where: {
            email: email.toString()    
        }
    });
    return user;
}

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