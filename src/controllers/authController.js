const bcrypt = require('bcrypt');
const {login,register} = require('../services/authService');
const {validateEmail,validatePassword} = require('../middleware/validations');
const generateToken = require('../helper/jwt');
const { request } = require('express');

async function loginUser(req,res){
    const user = await login(req.body.email);

    if(user){
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if(isPasswordValid){
            const payload = {"id":req.body.id,"email":req.body.email};
            const token = generateToken(res,payload);
            res.status(200).json({
                message: "Login Successfull",
                token: token
            });
        }
        else{
            res.send("Invalid Password");
        }
    }
    else{
        res.send("User not found");
    }
   
}

async function registerUser(req,res){

    const {password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    req.body = {
        ...req.body,
        password: encryptedPassword
    }

    const user = await register(req.body);
    return res.send("Registration Successfull");
}

module.exports = {loginUser,registerUser}