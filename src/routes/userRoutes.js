const getAllUsers = require('../controllers/userController');   
const authenticateToken = require('../middleware/jwt');
const express = require('express');
const userRoutes = express.Router();

userRoutes.get('/users', authenticateToken, getAllUsers);

module.exports = userRoutes;
