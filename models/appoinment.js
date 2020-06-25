const mongoose = require ('mongoose');

const appointSchema = new mongoose.Schema({
    appontid:{
        type: String,
        required :true,
        unique: true,
    },
    username:[{
        type: Mongoose.Schema.Types.ObjectId,
               ref: "User",
        required:true,
    }],
    dusername:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor"
}, 
    date:{
        type:date,
        required:true,
    },
    descrip:{
        type: String,
        required:true,
    }
  
}, {timestamps:true})
module.exports =mongoose.model('appointment',appointSchema);