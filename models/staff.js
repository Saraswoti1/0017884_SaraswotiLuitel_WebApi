const mongoose = require ('mongoose');
//staff registration
const staffSchema = new mongoose.Schema({
    fname:{
        type: String,
        required :true,
    },
    mname:{     
        type: String,   
    },
    lname:{
        type: String,
        required :true,
    },
    gmail:{
        type: String,
        required :true,
        minlength:6,
    },
    contactno:{
        type:String,
        required: true,
        minlength:7,
        maxlength: 10,
    },
    address:{
        type:String,
        required: true,
    },
    dep_name:{
        type: String,
        required: true,
    },
    username:{ 
        type: String,
        required :true,
        minlength:6,
        unique: true
    },
    password:{
        type:String,
        minlength:6,
        required: true
    }},
{timestamps:true})
module.exports =mongoose.model('staff',staffSchema);