const mongoose = require ('mongoose');
const validator = require ('validator')

const AddressSchema = new mongoose.Schema({
    user_id:{
        type : String,
        required : true,
        trim : true
    },   
    door_no:{
        type : Number,
        required : true,
        trim : true
    },
    street:{
        type : String,
        required : true,
        trim : true
    },
    state_id:{
        type : String,
        required : true,
        trim : true
    },
    country_id:{
        type : String,
        required : true,
        trim : true
    },
    pincode:{
        type : Number,
        required : true,
        trim : true
    },
    nearby:{
        type : String,
        required : true,
        trim : true
    },
},{
    timestamps : true

});

const Address = mongoose.model('Address', AddressSchema );

module.exports = Address;


