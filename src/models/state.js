const mongoose = require ('mongoose');
const validator = require ('validator')

const StateSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    country_id:{
        type : String,
        required : true,
        trim : true
    },

})

const State = mongoose.model('State', StateSchema);

module.exports = State