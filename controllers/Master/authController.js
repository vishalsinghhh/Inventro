const Master = require('../../models/Master/Master')
const CustomError = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const registerMaster = async(req, res)=>{
  const {phone, password} = req.body
  if(!phone || !password){
    throw new CustomError.BadRequestError('Please provide all values!')
  }
  const isUserExists = await Master.findOne({phone:phone})
  if(isUserExists){
    throw new CustomError.BadRequestError('User already exists!')
  }
  const user = await Master.create({
    phone,
    password
  })
  newUser = {
    phone:user.phone,
    role:user.role
  }
  const token = user.createJWT();

 res.status(StatusCodes.CREATED).json({master:newUser, token})
}

const loginMaster = async(req, res)=>{
  const {phone, password} = req.body
  if(!phone || !password){
    throw new CustomError.BadRequestError('Please provide all values')
  }
  const master = await Master.findOne({phone:phone})
  if(!master){
    throw new CustomError.BadRequestError('Invalid credentials')
  }
  const isPasswordCorrect = await master.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  newMaster = {
    phone:master.phone,
    role:master.role
  }
  const token = master.createJWT();

  res.status(StatusCodes.CREATED).json({master:newMaster, token})
}


module.exports = {
  registerMaster,
  loginMaster
};
