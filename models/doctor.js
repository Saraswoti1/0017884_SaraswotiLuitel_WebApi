const mongoose = require ('mongoose');

//DOCTOR registration
const doctSchema = new mongoose.Schema({
   
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
        maxlength: 255,
    },
    contactno:{
        type:String,
        required: true,
        minlength:7,
        maxlength: 10,
    },
    emcontact:{
        type:String,
        required: true,
        minlength:7,
        maxlength: 10,
    },
    dob: {
        type: String,
        required: true,
        },
    paddress:{
        type:String,
        required: true,
    },
    taddress:{
        type:String,
        required: true,
    },
    specialist:{
        type:String,
        required: true,
        enum:["Cardiologist","Dermatologist",
        "Psychiatrist","Gynecologist","pediatricians","geriatrician"]
    },
    department:{
        type:String,
        required: true
    },
    qualification:{
        type:String,
        required: true
    },
    experience:{
        type:String,
        required: true
    },
    dusername:{ 
        type: String,
        required :true,
        minlength:6,
        unique: true
    },
    password:{
        type:String,
        minlength:6,
        required: true
    },
    photo:{
        type:String,
    },
    appointment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "appointment"
    }
},
{timestamps:true}) 
module.exports =mongoose.model('doctors',doctSchema);
