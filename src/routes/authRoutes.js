const express = require('express');
const authRoutes = express.Router();

// Define the routes for the auth module

authRoutes.get('/login', (req, res) => {
    res.send('User');
});

authRoutes.post('/register', (req, res) => {
    res.send('Register');
})

module.exports = authRoutes;

