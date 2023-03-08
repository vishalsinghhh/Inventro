const CustomError = require("../errors");
const { isTokenValid } = require("../utils");
const jwt = require('jsonwebtoken')
const User = require("../models/User")
const SuperAdmin = require('../models/SuperAdmin/SuperAdmin')
const Admin = require('../models/Admin/Admin')
const Dhobi = require('../models/Dhobi/Dhobi')

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer')){
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = {userId: payload.userId}
    next()
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }
  
};

const authorizePermissions = (...roles) => {
  return async (req, res, next) => {
    req.body.user = req.user.userId;
    const userID = req.body.user
    
    const user = await User.findOne({_id:userID})
    if (!roles.includes(user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    next()
  };
};

const authorizePermissionsSuperAdmin = (...roles)=>{
  return async(req, res, next)=>{
    req.body.user = req.user.userId;
    const userID = req.body.user

    const user = await SuperAdmin.findOne({_id:userID})
    if(!user){
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    if (!roles.includes(user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    next()
  }
}

const authorizePermissionsAdmin = (...roles)=>{
  return async(req, res, next)=>{
    req.body.user = req.user.userId;
    const userID = req.body.user

    const user = await Admin.findOne({_id:userID})
    if(!user){
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    if (!roles.includes(user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    next()
  }
}

const authorizePermissionsDhobi = (...roles)=>{
  return async(req, res, next)=>{
    req.body.user = req.user.userId;
    const userID = req.body.user

    const user = await Dhobi.findOne({_id:userID})
    if(!user){
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    if (!roles.includes(user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    next()
  }
}

module.exports = {
  authenticateUser,
  authorizePermissions,
  authorizePermissionsSuperAdmin,
  authorizePermissionsAdmin,
  authorizePermissionsDhobi
};


  // const token = req.signedCookies.token;

  // if (!token) {
  //   throw new CustomError.UnauthenticatedError("Authentication Invalid");
  // }
  // try {
  //   const { firstname, userId, role } = isTokenValid({ token });
  //   req.user = { firstname, userId, role };
  //   next();
  // } catch (error) {
  //   throw new CustomError.UnauthenticatedError("Authentication Invalid");
  // }