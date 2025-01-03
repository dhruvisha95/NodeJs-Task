const bcrypt = require('bcrypt');
const {login,register} = require('../services/authService');
const {validateEmail,validatePassword} = require('../validators/validations');

async function loginUser(req,res){
    const user = await login(req.body.email);

    if(user){
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if(isPasswordValid){
            res.send("Login Successfull");
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

    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.send("incomplete details")
    }

    if(!validateEmail(email)|| !validatePassword(password)){
        return res.send("Invalid Email or password");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    req.body = {
        ...req.body,
        password: encryptedPassword
    }

    const user = await register(req.body);
    return res.send("Registration Successfull");
}

module.exports = {loginUser,registerUser}