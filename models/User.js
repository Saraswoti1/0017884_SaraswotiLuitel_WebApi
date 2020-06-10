const mongoose = require ('mongoose');

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
   // role:{
      //  type:String,  
       // default: 'basic',
       // enum: ['basic', 'doctor','staff'],
    

},
{timestamps:true})



const userinSchema = new mongoose.Schema({

    photo:{
        type:String,
    },
    allergy:{
        type:String,
        
    },
    bp:{
        type:String,
        //yes or no xa bhane arko option
    },
    diabeties:{
        type:String,
        //yes or no xa bhane arko option
    },
    smoke:{
        type:String, 
    },
    operation:{
        type:String, 
    },
    //yes bhaye k ko gareko kati barda huda gareko
    report:{
    type:String,
     },
},
    {timestamps:true})
module.exports =mongoose.model('User',userSchema);
module.exports =mongoose.model('Usern',userinSchema);