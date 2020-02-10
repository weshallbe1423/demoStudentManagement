const bodyParser=require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.use(express.static(__dirname + '/public'));



mongoose.Promise=global.Promise;
const db="mongodb+srv://weshallbe:root@cluster0-0ycnf.mongodb.net/managementDB?retryWrites=true&w=majority"
mongoose.connect(db, {
    useNewUrlParser : true
    },
    err => {
    if (err){
        console.error('Error: ' + err)
    }
    else{
        console.log('Connected to MongoDb')
    }
})


const studentRoute=require('./api/routes/student');
// const collegeRoute=require('./api/routes/college');

app.use('/',studentRoute);

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin','Origin,X-Requested-With,Content-Type,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Origin','PUT,POST,GET,PATCH,DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use((req,res,next)=>{
    const error=new Error("Not Found!");
    error.status=404;
    next(error)

})

app.use((error,req,res,next)=>{
    // const error=new Error("Internal Server Error");
    console.log(error);
    error.status=501;
    res.status(501).json({
        "Message":error
    })

})
module.exports=app;