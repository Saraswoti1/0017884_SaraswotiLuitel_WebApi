const mongoose = require ('mongoose');
//patient registration
const userSchema = new mongoose.Schema({
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
    marstatus:{
        type:String,
        enum:["Yes","no"],
        required: true,
    },
    dob: {
        type: String,
        required: true,
        },
    nationality:{
        type:String,
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
    },
    photo:{
        type:String,
    },
    allergy:{
        type:String,   
    },
    bp:{
        type:String,
        enum: ["Yes-High","Yes-Low","No not yet"],
        required :true
    },
    diabeties:{
        type:String,
        enum: ["Yes-High","Yes-Low","No not yet"],
        required :true
    },
    smoke:{
        type:String, 
        enum: ["Yes-i do","I used to","No not yet"],
        required :true
    },
    operation:{
        type:String,
        enum: ["Yes","No"],
        required :true 
    },   
    report:{
    type:String,
},
appointment:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "appointment"
}
},
{timestamps:true})
module.exports =mongoose.model('User',userSchema);
