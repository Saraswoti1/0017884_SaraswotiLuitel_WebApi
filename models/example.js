const mongoose = require ('mongoose');
const exampleSchema = new mongoose.Schema({
    stafid:{
        type: String,
        required :true,
        minlength:5,
        unique: true,
    }

}, {timestamps:true})
module.exports =mongoose.model('staff_id',exampleSchema);