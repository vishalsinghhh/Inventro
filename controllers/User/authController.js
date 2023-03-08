const User = require('../../models/User/User')
const CustomError = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const registerUser = async(req, res)=>{
  const {firstname, lastname, email, phone, password} = req.body
  if(!firstname || !lastname || !email || !phone || !password){
    throw new CustomError.BadRequestError('Please provide all values!')
  }
  const isUserExists = await User.findOne({phone:phone})
  if(isUserExists){
    throw new CustomError.BadRequestError('User already exists!')
  }
  const user = await User.create({
    firstname,
    lastname,
    email,
    phone,
    password
  })
  newUser = {
    firstname:user.firstname,
    lastname:user.lastname,
    email:user.email,
    phone:user.phone,
    role:user.role
  }
  const token = user.createJWT();

 res.status(StatusCodes.CREATED).json({user:newUser, token})
}

module.exports = {
  registerUser
};
