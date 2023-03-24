const MasterStock = require('../../models/Master/MasterStock')
const { StatusCodes } = require("http-status-codes");

const addStockToInventory = async(req, res)=>{
    const {category, subCategory, subSubCategory} = req.body
    const stock = await MasterStock.findOne({})
    const category1 = stock.category
    let newCategory = [];
    // for (const item of category1){
    //     console.log(item.category);
        // if(category1.some((category1)=>category1.category === category)){
        //     if(category1[0].subCategory.some((subCategory1)=>subCategory1.subCategory === subCategory)){
        //         console.log('hello');
        //         if(category1[0].subCategory[].some((subCategory1)=>subCategory1.subCategory === subCategory)){

        //         }
        //     }
        // }
    // }
    res.status(StatusCodes.OK).json({stock})
    
    
    // let singleSubSubCategory = {
    //     subSubCategory:subSubCategory
    // }
    // let singleSubSubCategoryNew = []
    // singleSubSubCategoryNew = [...singleSubSubCategoryNew, singleSubSubCategory]
    // let singleSubCategory = {
    //     subCategory:subCategory,
    //     subSubCategory:singleSubSubCategoryNew
    // }
    // let subCategoryNew = []
    // subCategoryNew = [...subCategoryNew, singleSubCategory]
    // let singleCategories = {
    //     category:category,
    //     subCategory:subCategoryNew
    // }
    // let categoryNew = []
    // categoryNew = [...categoryNew, singleCategories]

    // const stocks = await MasterStock.create({
    //     master:req.user.userId,
    //     category:categoryNew
    // })
    
    // res.status(StatusCodes.CREATED).json({stocks[0]})
}

const getStock = async(req, res)=>{
    
}

module.exports ={
    addStockToInventory
}