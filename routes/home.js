const express = require('express');
const app = express.Router();

app.use('/',(req, res) => {
    res.render('home')
});

module.exports = app;