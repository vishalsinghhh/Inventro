const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide your first name"],
    minlength: 3,
    maxlength: 50,
  },
  lastname: {
    type: String,
    required: [true, "Please provide your second name"],
    minlength: 1,
    maxlength: 50,
  },
  email:{
    type:String,
    unique:true,
    required:[true, 'Please provide email'],
    validate:{
        validator:validator.isEmail,
        message:'Please provide valid email'
    }
  },
  phone:{
    type:Number,
    unique:true,
    minlength:10
  },
  password:{
    type:String,
    validate:{
        validator:validator.isStrongPassword,
        message:'Please provide a strong password'
    }
  },
  role:{
    type:String,
    enum:['dhobi', 'user', 'admin'],
    default:'user'
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  userID:{
    type:Number,
    required:true
  },
  isCollegeStudent:{
    type:Boolean,
    default:false
  },
  selectCollege:{
    type:String,
    enum:['', 'VIT Chennai']
  },
  forgotPasswordFlag:{
    type:Boolean,
    default:false
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

module.exports = mongoose.model('User', UserSchema)