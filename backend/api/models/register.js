const mongoose=require('mongoose');
var crypto=require('crypto');
const registerSchema=mongoose.Schema({
    //registration
email:{type:String},
password:{type:String},
confirmPassword:{type:String},
resetPasswordToken: {
    type: String
},

resetPasswordExpires: {
    type: String
},

hash : String, 
salt : String 
})
registerSchema.methods.setPassword = function(password) { 
     
    // Creating a unique salt for a particular user 
       this.salt = crypto.randomBytes(16).toString('hex'); 
     
       // Hashing user's salt and password with 1000 iterations, 
    //    64 length and sha512 digest 
       this.hash = crypto.pbkdf2Sync(password, this.salt,  
       1000, 64, `sha512`).toString(`hex`); 
   }; 

   registerSchema.methods.validPassword = function(password) { 
    var hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
};
// const User = module.exports = mongoose.model('User', UserSchema);
const Register=module.exports=mongoose.model('register',registerSchema);