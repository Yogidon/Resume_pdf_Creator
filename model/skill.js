const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    skill:[{
        type:String
    }],
    level:[{
        type:String
    }]
});

module.exports = mongoose.model("Skill",skillSchema);