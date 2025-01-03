const express = require('express');
const authRoutes = express.Router();
const {loginUser,registerUser} = require('../controllers/authController');
const validateData = require('../middleware/validations');
// Define the routes for the auth module

authRoutes.post('/login', loginUser);
authRoutes.post('/register', validateData, registerUser);


module.exports = authRoutes;

