const mongoose = require ('mongoose');
const validator = require ('validator')

const AdSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        trim : true
    },
    description:{
        type : String,
        required : true,
        trim : true
    },
    target_url:{
        type : String,
        required : true,
        trim : true
    },
},{
    timestamps : true

});

const Ad = mongoose.model('Ad',AdSchema);

module.exports = Ad;
