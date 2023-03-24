const CustomError = require("../../errors");
const { StatusCodes } = require("http-status-codes");
const ServiceLocation = require('../../models/Admin/ServiceLocations')

const getAllStores = async(req, res)=>{
    const {id:pincode} = req.params
    if(!pincode){
        throw new CustomError.BadRequestError('Please provide pincode')
    }

    const shops = await ServiceLocation.find({pincode})

    res.status(StatusCodes.OK).json({shops})
}

const getAllStoreProducts = async(req, res)=>{
    const {id:shopId} = req.params

    
}

module.exports = {
    getAllStores,
    getAllStoreProducts
}