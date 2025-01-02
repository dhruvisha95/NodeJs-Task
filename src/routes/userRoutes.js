const express = require('express');

const userRoutes = express.Router();


userRoutes.get('/users',(req, res) => {
    res.send('Users');
});

module.exports = userRoutes;
