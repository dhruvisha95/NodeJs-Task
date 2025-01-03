const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUsers(){
    const users = await prisma.users.findMany();
    return users;
}

async function getUser(id){

    const user = await prisma.users.findUnique({  
        where: {
            id: parseInt(id)
        }
    });
    return user;
}

module.exports = {getUsers,getUser};          
