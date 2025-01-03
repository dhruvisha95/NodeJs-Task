const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(res,payload){

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'strict',
        maxAge: 3600000, 
    });
}

module.exports = generateToken
