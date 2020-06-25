const mongoose = require ('mongoose');

const reportSchema = new mongoose.Schema({
    reportid:{
        type: String,
        required :true,
        unique: true,
    },
    image:{
        type: Object,
        default:null
    },
    descr:{
        type: String,
        required: true,
    },
    //upload by doctor or staff 
    username:[{
        type: Mongoose.Schema.Types.ObjectId,
        ref:"staff",
    }],
    //upload by doctor or staff
    dusername:[{
        type: Mongoose.Schema.Types.ObjectId,
        ref:"doctor",
    }]
},

{timestamps:true})
module.exports =mongoose.model('report',reportSchema);