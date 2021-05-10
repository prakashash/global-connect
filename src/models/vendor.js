const mongoose = require ('mongoose');
const validator = require ('validator')

const VendorSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    company_name:{
        type : String,
        required : true,
        trim : true
    },
    plan_id:{
        type : String,
        required : true,
        trim : true
    },
    Verified_vendor:{
        type : Boolean,
        required : true,
        trim : true
    },
    password:{
        type : String,
        required : true,
        trim : true,
        minlength : 8,
        validate : function(value){
            if(value.includes('password')){
                throw new Error ('password should not contain password')
            }
        }
    },
    email:{
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowerCase : true,
        validate : function(value){
            if(!validator.isEmail(value)){
                throw new Error ('please enter valid email')
            }
        }
    },
    status:{
        type : String,
        required : true,
        trim : true
    },
},{
    timestamps : true

});

const Vendor = mongoose.model('Vendor',VendorSchema);

module.exports = Vendor;
