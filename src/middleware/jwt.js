const jwt = require('jsonwebtoken');

// Replace with your secret key
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {

    let token;
    try{
    const auth = req.headers['authorization']; 
    token = auth && auth.slice(7)
    }
    catch(err){
        return res.status(401).send("Access Denied: No Token Provided");
    }

    if (!token) {
        return res.status(401).send("Access Denied: No Token Provided");
    }

    try {
        const decoded  =  jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        next(); 
    } catch (err) {
        return res.status(403).send("Access Denied: Invalid Token");
    }
}

module.exports = authenticateToken;