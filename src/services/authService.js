const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function login(req,res){
    
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