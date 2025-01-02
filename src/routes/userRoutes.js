const getAllUsers = require('../controllers/userController');   

const express = require('express');
const userRoutes = express.Router();

userRoutes.get('/users', getAllUsers);

module.exports = userRoutes;
