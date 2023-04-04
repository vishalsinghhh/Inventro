const Users = require('../../models/User/User')
const CustomError = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const registerUser = async(req, res)=>{
  const {name, phone, password} = req.body
  if(!name || !phone || !password){
    throw new CustomError.BadRequestError('Please provide all values!')
  }
  const isUserExists = await Users.findOne({phone:phone})
  if(isUserExists){
    throw new CustomError.BadRequestError('User already exists!')
  }
  const user = await Users.create({
    name,
    phone,
    password
  })
  newUser = {
    name:user.name,
    phone:user.phone,
    role:user.role
  }
  const token = user.createJWT();

 res.status(StatusCodes.CREATED).json({user:newUser, token})
}

const loginUser = async(req, res)=>{
  const {phone, password} = req.body
  if(!phone || !password){
    throw new CustomError.BadRequestError('Please provide all values')
  }
  const user = await Users.findOne({phone:phone})
  if(!user){
    throw new CustomError.BadRequestError('Invalid credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  newUser = {
    name:user.name,
    phone:user.phone,
    role:user.role
  }
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({user:newUser, token})
}

module.exports = {
  registerUser,
  loginUser
};
