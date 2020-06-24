const express = require('express');
const mongoose = require ('mongoose');
//const bodyParser = require('body-parser');
require('dotenv').config();

const auth = require('./auth');
const userRouter = require('./routes/userRouter');
const exampleRouter = require('./routes/exampleRouter');


const app =express();
//connection for database
mongoose.connect('mongodb://127.0.0.1:27017/record',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
}).then(()=>{
    console.log('DataBase connected successfully');
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//app.use(bodyParser.urlencoded({ extended: true }));

//for page loading 
app.get('/', (req,res) =>{
res.send('welcome to the PRMS ');
});

app.use('/prms/users',userRouter);
app.use('/prms/users/example',exampleRouter);
//app.use('/prms/task',auth.VerifyUsers,taskRouter);

//port calling for server name from .env file
app.listen(process.env.Port,()=>{
    console.log(`Server is running at localhost:${process.env.Port}`);
     });
   