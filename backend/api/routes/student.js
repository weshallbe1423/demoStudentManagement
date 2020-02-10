const express=require('express');
const router=express.Router();
const Student=require('../models/student');
const Register=require('../models/register');
const async=require('async');
const jwt =require('jsonwebtoken');
const config=require('../config/default.json');
const authChecks=require("../middleware/authentication");
const nodemailer=require('nodemailer');
const multer=require('multer');




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename:function(req,file,cb){
        return crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) {
              return cb(err);
            }
            return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
          });
    }
});
const fileFilter=(req,file,cb)=>{
 
    if(file.mimetype==='image/jpeg' || file.mimetype==='application/octet-stream'||file.mimetype==='image/png'  ){
        cb(null,true)
    }else{
        cb(null,false)
    }
   
}
const upload = multer({ storage: storage,
    limits:{fileSize: 1024*1024*5 } ,
    fileFilter:fileFilter
});

var imageUpload = upload.fields([{ name: 'photoId', maxCount: 1 },
             { name: 'addressFront', maxCount: 1 },
              {name:'addressBack',maxCount:1}
            ])


//  app.route('/uploadImage').post(imageUpload,(req,res) => {
//                 var filesArray=req.files
               
//                 Controller.userController.uploadImage(req.body,filesArray,(err, data) => {
//                       console.log(err, data)
//                       if (err) {
//                           if (err.MESSAGE) {
//                               res.status(400).send({
//                                   "Status": "0",
//                                   "Message": err.MESSAGE,
//                               })
//                           } else {
//                               res.status(400).send({
//                                   "Status": "0",
//                                   "Message": err,
//                               })
//                           }
//                           return;
//                       } else {
//                           res.status(200).send({
//                               "Status": "1",
//                               "Message": "PROFILE UPDATED SUCCESSFULLY",
//                           })
//                       }
//                             })
//               })


//get all students records
router.get('/getStudentDetails',authChecks,(req,res,next)=>{
  Student.find()
  .exec()
  .then(studentData=>{
      
      res.status(200).json({
          "Number of records":studentData.length,
          "Data":studentData
      })
  }).catch(err=>{
      res.status(400).json({
          "Error":err
      })
  })
})

//get particular student records


router.post('/getStudentDetailsByRollnumber',(req,res,next)=>{
    const rollNumber=req.body.rollNumber;
    Student.find({rollNumber:rollNumber})
    
    .exec()
    .then(studentData=>{
        res.status(200).json({
            "Message":"Student Found",
            "Data":studentData
        })
    }).catch(err=>{
        res.status(400).json({
            "Error":err
        })
    })
  })
//save student details
router.post('/saveStudentData',authChecks,(req,res,next)=>{
console.log(req.body);
const student=new Student({
    rollNumber:req.body.rollNumber,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    middleName:req.body.middleName,
    className:req.body.className,
    classYear:req.body.classYear,
    admissionYear:req.body.admissionYear
})
student.save()
.then(studentData=>{
    res.status(200).json({
        "Status":"1",
        "Message":"Saved successfull",
        "data":studentData
    })
})
.catch(err=>{
    console.log(err)
    res.status(400).json({
        "Status":"0",
        "Message":"unsuccessfull",
         "Error":err
    })
})
})
//delete student info
 router.post('/deleteStudentDetails',authChecks,(req,res,next)=>{
    const rollNumber=req.body.rollNumber;
     Student.deleteOne({rollNumber:rollNumber})
        .then(result=>{
            console.log(result);
            res.status(200).json({
                "Status":"1",
                "Message":"Deleted Successfully",
            })
        })
        .catch(err=>{
            res.status(400).json({
                    "Status":"0",
                    "Message":"Not Deleted",
            })
        })
 })
 //update student info
 router.post('/updateStudentDetails',(req,res,next)=>{
    const rollNumber=req.body.rollNumber;
    Student.updateOne({rollNumber:rollNumber},
        {$set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName        
        }}
        )
        .then(result=>{
            res.status(200).json({
                "Status":"1",
                "Message":"Updated Successfully",
            })
        })
        .catch(err=>{
            res.status(400).json({
                    "Status":"0",
                    "Message":"Not Updated",
            })
        })
 })



router.post('/signup',authChecks, (req, res, next) => { 
     Register.find({email:req.body.email}).exec()
     .then(docs=>{
         if(docs.length>=1){
            res.status(409).json({
                message:"user exists!"
            })
         }else{

        // Creating empty user object 
        let newUser = new Register(); 
        // Initialize newUser object with request data 
        newUser.email = req.body.email 
        // Call setPassword function to hash password 
        newUser.setPassword(req.body.password);
        newUser.setPassword(req.body.confirmPassword); 
        // Save newUser object to database 
        newUser.save((err, User) => { 
            if (err) { 
                return res.status(400).send({ 
                    message : "Failed to add user."
                }); 
            } 
            else { 
                return res.status(201).send({ 
                    message : "Registered successfully."
                }); 
            } 
        }); 
                }
            })

});


router.post('/login', (req, res) => { 
  
    // Find user with requested email 
    Register.findOne({ email : req.body.email }, function(err, user) { 
        if(err){
            return res.status(400).send({ 
                status:"0",
                message : "Something wrong"
            }); 
        }else{
            if (user === null) { 
                return res.status(400).send({ 
                    status:"0",
                    message : "User not found."
                }); 
            } 
            else { 
                console.log(user);
                if (user.validPassword(req.body.password)) { 
                   const token= jwt.sign({
                        email:user.email,
                        userId:user._id
                    },config.secret,
                    {expiresIn:"1h"}
                        )

                    return res.status(201).send({ 
                        status:"1",
                        message : "User Logged In Successfully!",
                        token:token
                       
                    }) 
                } 
                else { 
                    return res.status(400).send({ 
                        status:"0",
                        message : "Wrong Password"
                    }); 
                } 
            } 
        }
        
    }); 
}); 
  
router.get('/getRegisteredStudent',(req,res)=>{
    Register.find().exec()
    .then(result=>{
        res.status(200).json({
            "TotalRecords":result.length,
            "Data":result
        })
    })
    .catch(err=>{
        res.status(400).json({
            "Error":err
        })
    })

})


router.post('/deleteRegister',(req,res,next)=>{
    const id=req.body.id;
   Student.deleteOne({_id:id})
        .then(result=>{
            res.status(200).json({
                "Status":"1",
                "Message":"Deleted Successfully",
            })
        })
        .catch(err=>{
            res.status(400).json({
                    "Status":"0",
                    "Message":"Not Deleted",
            })
        })
 })

 router.post('/forgotPassword',(req,res)=>{
        const emailId  = "vishalnikalje23@gmail.com";
        const pass = "Autorun.Inf";

        async.waterfall([
            function (done) {
                var otp = Math.floor(100000 + Math.random() * 900000);
                done(null, otp);
            },
            function (otp, done) {
                Register.findOne({
                    email: req.body.email
                }, function (err, user) {
                    if (!user) {
                        res.status(400).send({
                            "Status": "0",
                            "Message": "No account with that email address exists."
                        })
                    } else {
                        console.log(user);
                        user.resetPasswordToken = otp;
                        user.resetPasswordExpires = Date.now() + 180000;
                        
                        user.save(function (err) {
                            done(err, otp, user);
                        });
                    }
                });
            },
            function (otp, user, done) {
                var smtpTransport = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: emailId,
                        pass: pass
                    }
                });
                var mailOptions = {
                    to: user.email,
                    from: emailId , 
                    subject: ' Password Reset',
                    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please Use this OTP: ' + otp + ' to complete the process:\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                };
                smtpTransport.sendMail(mailOptions, function (err) {
                    console.log('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
                    done(err, 'done');
                    res.status(200).send({
                        "Status": "1",
                        "Message": "OTP Sent on Mail Address"
                    })
                });
            }
        ], function (err) {
            if (err) return err;
        });

 })

router.post('/validateOtp',(req,res)=>{
    const emailId=req.body.email;
    const otp=req.body.resetPasswordToken
    Register.find({email:emailId}).exec()
    .then(registerData=>{
        console.log(registerData);
        if(registerData){
            console.log(registerData[0].resetPasswordToken);
            if(registerData[0].resetPasswordToken===otp){
                const currentTime=new Date();
                if (registerData[0].resetPasswordExpires >= currentTime){
                    res.status(200).json({
                        "Message":"OTP validated success"
                    })
                }
                else{
                    res.status(400).json({
                        "Message":"OTP Expired"
                    }) 
                }
            }
            else{
                res.status(400).json({
                    "Message":"Invalid OTP"
                })
            }
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({
            Message:"Something Wrong"
        })
    })
})



module.exports=router;

