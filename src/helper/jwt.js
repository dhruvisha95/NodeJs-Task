const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(payload){
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = generateToken
