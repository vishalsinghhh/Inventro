const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minlength: 1,
    maxlength: 50,
  },
  phone:{
    type:Number,
    unique:true,
    minlength:10,
    required:true
  },
  password:{
    type:String,
    required:true,
    validate:{
        validator:validator.isStrongPassword,
        message:'Please provide a strong password'
    }
  },
  role:{
    type:String,
    enum:['master', 'user', 'admin'],
    default:'user'
  }
}, {timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals:true}});



UserSchema.pre('save', async function(){
  // console.log(this.modifiedPaths());\
  if(!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function(canditatePassword){
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('newUser', UserSchema)