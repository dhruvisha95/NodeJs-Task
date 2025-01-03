const jwt = require('jsonwebtoken');
const { getUser } = require('../services/userService');
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {

    try {
        const auth = req.headers['authorization'];
        const token = auth && auth.slice(7)
        
        if (!token) {
            return res.status(401).send("Access Denied: No Token Provided");
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const id = decoded.id;
        
        if (getUser(id)) {
            next();
        }
        else {
            return res.status(403).send("Access Denied: Invalid Token");
        }
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = authenticateToken;