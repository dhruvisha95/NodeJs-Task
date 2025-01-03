const bcrypt = require('bcrypt');
const { login, register } = require('../services/authService');
const generateToken = require('../helper/jwt');

async function loginUser(req, res) {
    const user = await login(req.body.email);

    if (user) {
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordValid) {
            const payload = { "id": user.id, "email": req.body.email };
            const token = generateToken(res, payload);
            console.log(token);
            res.status(200).json({
                token: token,
                message: "Login Successfull",
            });
        }
        else {
            res.status(401).json({ message: "Invalid Password" });
        }
    }
    else {
        res.status(400).json({ message: "User Not Found" });
    }
}

async function registerUser(req, res) {

    const { password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    req.body = {
        ...req.body,
        password: encryptedPassword
    }

    const user = await register(req.body);
    return res.status(200).json({ message: "Registration Successfull", user: user });
}

module.exports = { loginUser, registerUser }