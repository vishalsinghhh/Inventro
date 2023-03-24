const CustomError = require("../../errors");
const { StatusCodes } = require("http-status-codes");
const Admin = require('../../models/Admin/Admin')
const ServiceLocation = require('../../models/Admin/ServiceLocations')

const registerAdmin = async (req, res) => {
  const { phone, password, companyName, panCardNo } = req.body;

  if (!phone || !password || !companyName || !panCardNo) {
    throw new CustomError.BadRequestError("Please provide all values!");
  }

  const isAdminExists = await Master.findOne({ phone: phone });
  const isPanExists = await Master.findOne({ panCardNo: panCardNo });
  if (isAdminExists || isPanExists) {
    throw new CustomError.BadRequestError("Admin already exists!");
  }

  const admin = await Admin.create({
    phone, password, companyName, panCardNo, masterId:req.user.userId
  });
  newUser = {
    phone: admin.phone,
    role: admin.role,
    companyName:admin.companyName,
    panCardNo:admin.panCardNo
  };
  req.status(StatusCodes.CREATED).json({msg:'New Admin Created!',newUser})
};

const addServiceLocations = async (req, res) => {
  const {id : adminId}= req.params
  const {address, pincode, shopNum} = req.body
  if(!adminId || !address || !pincode || !shopNum){
    throw new CustomError.BadRequestError('Please provide all values!')
  }
  const isShopExists = await ServiceLocation.findOne({shopNum})
  if(!isShopExists){
    throw new CustomError.BadRequestError('Shop already exists!')
  }

  const newShop = await ServiceLocation.create({admin:adminId, master:req.user.id, address, pincode, shopNum})

  res.status(StatusCodes.CREATED).json({newShop})
};

const addStockToAdmin = async (req, res) => {};

const getAdminStock = async (req, res) => {};

module.exports = {
  registerAdmin,
  addServiceLocations
};
