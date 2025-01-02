const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {login,register} = require('../services/authService');

async function loginUser(req,res){
    const user = await login();
    res.send("Login Successfull");
}

async function registerUser(req,res){

    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.send("incomplete details")
    }

    req.body = {
        ...req.body,
        password: "113"
    }

    const user = await register(req.body);
    res.send(user.toString());
}

module.exports = {loginUser,registerUser}