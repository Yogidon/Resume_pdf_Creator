const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    school_10: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    board_10: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    sch10_start_month:{
        type:String,
        required:true,
        maxlength:255,
        trim : true

    },
    sch10_start_year:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    sch10_end_month:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    sch10_end_year:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },

    school_12: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    board_12:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    sch12_start_month:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    sch12_start_year:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    sch12_end_month:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    sch12_end_year:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },

    u_clg:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    under_course:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    under_start_month:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    under_start_year:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    under_end_month:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    under_end_year:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    under_degree:{
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },

    p_clg:{
        type:String,
        maxlength:255,
        trim : true
    },
    post_course:{
        type:String,
        maxlength:255,
        trim : true
    },
    post_start_month:{
        type:String,
        maxlength:255,
        trim : true
    },
    post_start_year:{
        type:String,
        maxlength:255,
        trim : true
    },
    post_end_month:{
        type:String,
        maxlength:255,
        trim : true
    },
    post_end_year:{
        type:String,
        maxlength:255,
        trim : true
    },
    post_degree:{
        type:String,
        maxlength:255,
        trim : true
    }
});

module.exports = mongoose.model('Education',educationSchema);