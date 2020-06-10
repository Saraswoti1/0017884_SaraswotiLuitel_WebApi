const express= require('express');
const User =require('../models/User');
const router =express.Router();
const bcrypt =require ('bcryptjs');
const jwt = require('jsonwebtoken');




router.post('/register',( req,res,next)=>{
    let {fname,mname,lname,gmail,contactno,emcontact,marstatus,
        dob,nationality,paddress,taddress,photo,allergy,bp,diabeties,
        smoke,operation,report,username,password}= req.body;
User.find({ username})
.then(user =>{
    if(!user){
        throw new Error('User already exist');
    }
    bcrypt.hash(password,10, (err,hash)=>{
        if (err)  return next(err);
        User.create({fname,mname,lname,gmail,contactno,emcontact,marstatus,
            dob,nationality,paddress,taddress,photo,allergy,bp,diabeties,
            smoke,operation,report,username, password: hash})
        .then(user =>{
            res.json({status:"Signup success"});
        }).catch(next);
    })
    
}).catch(function(err){
    next(err)
}
);
});
router.post('/login',(req,res,next)=>{
    const  {username, password,} = req.body;
User.findOne({username})
.then((user)=>{
    if(!user){
        let err = new Error('User  does not exist');
        err.status=400;
        return next(err);
    }
    bcrypt.compare(password, user.password)
    .then((isMatched)=>{
        if (!isMatched){
            let err = Error('Password doesnot match');
            err.status=400;
            return next(err);
        }
        const payload ={
            id:user.id,
            username:user.username,
            role:user.role
        }
        jwt.sign(payload, process.env.SECRET,{expiresIn: '3hr'},(err, token)=>{
            if (err) return  next(err);
                        res.json({message:'Login successfull', token});
        })
    })
}).catch(next);
})

module.exports =router;