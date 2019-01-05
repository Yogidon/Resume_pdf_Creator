const express = require('express');
const app = express.Router();

const personalController = require('../controller/personal.js');
const experienceController = require('../controller/experience.js');
const educationController = require('../controller/education.js');
const skillController = require('../controller/skill.js');
const reviewController = require('../controller/review.js');

app.use('/personal/submit',personalController.personalDetails);

app.use('/experience/submit',experienceController.experienceDetails);

app.use('/education/submit',educationController.educationDetails);

app.use('/skill/submit',skillController.skillDetails);

app.use('/review',reviewController.reviewDetails);


app.use('/personal',(req, res) => {
    res.render('form_personal')
});

app.use('/experience',(req, res) => {
    res.render('form_experience')
});

app.use('/education',(req, res) => {
    res.render('form_edu')
});

app.use('/skill',(req, res) => {
    res.render('form_skill')
});


module.exports = app;