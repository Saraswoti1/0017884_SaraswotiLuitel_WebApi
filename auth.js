const jwt = require('jsonwebtoken');


const VerifyUsers = (req,res,next)=>{
console.log(req.headers.authorization);
let authHeader = req.headers.authorization;
if(!authHeader){
    let err =    new Error('NO AUTHENTICATION INFORMATION');
    err.status =401;
    return next (err);

}
let token = authHeader.split(" ")[1];
jwt.verify(token, process.env.SECRET, (err,payload)=>{
    if (err) return next (err);
    req.user =payload;
   return next();

})
}
const  verifyrole= (req,res,next)=>{
    if (!req.user){
        let err = new Error (' Unauthorized person cannot processed');
        err.status =401;
        return next(err);

    } if (req.user.role === 'basic'){
        let err = new Error('Forbidden!');
        err.status= 403;
        return next(err);
    } next ();

}
const  verifydoc= (req,res,next)=>{
    if (!req.user){
        let err = new Error (' Unauthorized person cannot procced');
        err.status =401;
        return next(err);
    } if (req.user.role !== 'doctor'){
        let err = new Error('You cannot view this unless you authorized this  page');
        err.status= 403;
        return next(err);
        
    } 
     next ();
}


//module.exports =router;

module.exports ={
    VerifyUsers,
    verifyrole,
    verifydoc
}