const express = require('express');
const authRoutes = express.Router();
const {loginUser,registerUser} = require('../controllers/authController');
// Define the routes for the auth module

authRoutes.post('/login', loginUser);
authRoutes.post('/register', registerUser);


module.exports = authRoutes;

