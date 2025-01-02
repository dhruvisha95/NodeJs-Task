import { getUsers } from '../controllers/userController';
const express = require('express');

const userRoutes = express.Router();


userRoutes.get('/users',()=>{
    res.send('Get all users')
});

module.exports = userRoutes;
