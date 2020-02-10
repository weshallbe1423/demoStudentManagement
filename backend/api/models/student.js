const mongoose =require('mongoose');
const jwt=require('jsonwebtoken');
const studentSchema=mongoose.Schema({
rollNumber:{type:Number},
firstName:{type:String},
middleName:{type:String},
lastName:{type:String},
className:{type:String},
classYear:{type:Number},
admissionYear:{type:Number},

isStudent:{type:Boolean}
})

// studentSchema.methods.generateAuthToken = function() { 
//     const token = jwt.sign({ _id: this._id, isStudent: this.isStudent }, secret.get('secret')); //get the private key from the config file -> environment variable
//     return token;
//   }

module.exports=mongoose.model('students',studentSchema);