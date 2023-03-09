const MasterStock = require('../../models/Master/MasterStock')
const { StatusCodes } = require("http-status-codes");

const addStockToInventory = async(req, res)=>{
    const {category, subCategory, subSubCategory} = req.body
    let singleSubSubCategory = {
        subSubCategory:subSubCategory
    }
    let singleSubSubCategoryNew = []
    singleSubSubCategoryNew = [...singleSubSubCategoryNew, singleSubSubCategory]
    let singleSubCategory = {
        subCategory:subCategory,
        subSubCategory:singleSubSubCategoryNew
    }
    let subCategoryNew = []
    subCategoryNew = [...subCategoryNew, singleSubCategory]
    let singleCategories = {
        category:category,
        subCategory:subCategoryNew
    }
    let categoryNew = []
    categoryNew = [...categoryNew, singleCategories]

    const stocks = await MasterStock.create({
        master:req.user.userId,
        category:categoryNew
    })
    
    res.status(StatusCodes.CREATED).json({stocks})
}

const getStock = async(req, res)=>{
    
}

module.exports ={
    addStockToInventory
}