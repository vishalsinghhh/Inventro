const MasterStock = require('../../models/Master/MasterStock')
const { StatusCodes } = require("http-status-codes");

const addStockToInventory = async(req, res)=>{
    
}

const getStock = async(req, res)=>{
    const {id:product_id} = req.params
    const item = await MasterStock.findOne({_id:product_id})
    console.log(item);
    res.send(item)
}

module.exports ={
    addStockToInventory,
    getStock
}