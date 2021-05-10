const mongoose = require ('mongoose');
const validator = require ('validator')

const ProductSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    vendor_id:{
        type : String,
        required : true,
        trim : true
    },
    quantity_available:{
        type : Number,
        required : true,
        trim : true
    },
    description:{
        type : String,
        required : true,
        trim : true
    },
    category_id:{
        type : String,
        required : true,
        trim : true
    },
    subcategory_id:{
        type : String,
        required : true,
        trim : true
    },
    price:{
        type : Number,
        required : true,
        trim : true
    },
},{
    timestamps : true

});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;
