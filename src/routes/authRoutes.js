const express = require('express');
const authRoutes = express.Router();
const {loginUser,registerUser} = require('../controllers/authController');
const validateData = require('../middleware/validations');

authRoutes.post('/login', loginUser);
authRoutes.post('/register', validateData, registerUser);


module.exports = authRoutes;

