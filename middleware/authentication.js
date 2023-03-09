const CustomError = require("../errors");
const jwt = require('jsonwebtoken')


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


module.exports = {
  authenticateUser,

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