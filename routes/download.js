const express = require('express');
const cookieParser = require('cookie-parser');
const app = express.Router();
app.use(cookieParser());


const downloadController = require('../controller/download.js');

app.use('/',downloadController.download);

module.exports = app;