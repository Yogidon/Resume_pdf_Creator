const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
   first_name: {
       type:String,
       required:true,
       maxlength:255,
       trim : true
   },
    last_name: {
        type:String,
        required:true,
        maxlength:255,
        trim : true
    },
    email : {
        type:String,
        required : true,
        match: /@gmail.com/,
        trim : true
    },
    website: {
        type:String
    },
    phone_no: {
        type:Number,
        required:true
    },
    profile: {
        type:String,
        required:true
    },
    hobbies: [{
       type:String,
       required:true
    }]

});

module.exports = mongoose.model('Personal',personalSchema);