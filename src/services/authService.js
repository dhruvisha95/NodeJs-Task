const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function login(email){
    let user = await prisma.users.findFirst({
        where: {
            email: email.toString()    
        }
    });
    return user;
}

async function register(data){
    const { name, email, password } = data;

    try{
    const newUser = await prisma.users.create({
        data: {
            name,
            email,
            password
        }
    });  
     return "registration successfull   " 
    }
    catch(error){
        return "error occured"
    }
}

module.exports = {login,register};