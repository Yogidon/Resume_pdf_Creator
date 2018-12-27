const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine','ejs');

const home = require('./routes/home');
const form = require('./routes/form');
const download = require('./routes/download');

app.use('/download', download);
app.use('/form', form );
app.use('/', home );

mongoose.connect('mongodb://localhost/Form_Data')
    .then(()=>{ console.log("Connected to mongoD") })
    .catch((err) =>{
        console.log(`Error Dude ${err}`)
    });

app.listen(3000,()=>{
    console.log("Server is  Listening at PORT 3000")
});