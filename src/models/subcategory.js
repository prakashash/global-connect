const mongoose = require ('mongoose');
const validator = require ('validator')

const SubcategorySchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    category_id:{
        type : String,
        required : true,
        trim : true
    },

})

const Subcategory = mongoose.model('Subcategory', SubcategorySchema);

module.exports = Subcategory