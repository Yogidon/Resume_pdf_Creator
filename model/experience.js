const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    employer: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    job_title: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    city: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    state: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    start_month:{
        type:String,
        required:true
    },
    start_year:{
        type:Number,
        required:true
    },
    end_month:{
        type:String,
        required:true
    },
    end_year:{
        type:Number,
        required:true
    },
    description:{
        type:String
    }
});

module.exports = mongoose.model('Experience',experienceSchema);