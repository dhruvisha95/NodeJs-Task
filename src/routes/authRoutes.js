const express = require('express');
const authRoutes = express.Router();
const {loginUser,registerUser} = require('../controllers/authController');
// Define the routes for the auth module

authRoutes.get('/login', loginUser);

authRoutes.post('/register', registerUser)

module.exports = authRoutes;

