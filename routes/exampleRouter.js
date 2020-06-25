const express= require('express');
const example =require('../models/example');
const router =express.Router();
const bcrypt =require ('bcryptjs');


router.post('/insert',( req,res,next)=>{
    let {stafid}= req.body;
example.find({stafid})
.then(eg =>{
    if(!eg){
        throw new Error('Uset');
    }
    
        
    example.create({stafid})
        .then(eg =>{
            res.json({status:"insert success"});
        }).catch(next);
   
    
}).catch(function(err){
    next(err)
}
);
});


module.exports =router;