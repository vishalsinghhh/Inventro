const MasterStock = require("../../models/Master/MasterStock");
const MasterSubcategory = require("../../models/Master/MasterSubcategory");
const MasterSubSubCategory = require("../../models/Master/MasterSubSubcategory")
const MasterPrice = require('../../models/Master/MasterPrices')
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../../errors");

const addCategory = async (req, res) => {
  const { category } = req.body;
  if (!category) {
    throw new CustomError.BadRequestError("Please provide category!");
  }
  const isCategoryExists = await MasterStock.findOne({
    master: req.user.userId,
    category: category,
  });
  if (isCategoryExists) {
    throw new CustomError.BadRequestError("This category already exists!");
  }
  const newCategory = await MasterStock.create({
    master: req.user.userId,
    category,
  });

  res.status(StatusCodes.CREATED).json({ newCategory });
};

const addSubCategory = async (req, res) => {
  const { id: categoryId } = req.params;
  const { subcategory } = req.body;
  if(!subcategory){
    throw new CustomError.BadRequestError('Please provide subcategory')
  }
  const isSubCategoryExists = await MasterSubcategory.findOne({
    subcategory: subcategory,
  })
  if(isSubCategoryExists){
    throw new CustomError.BadRequestError("This category already exists")
  }

  const newCategory = await MasterSubcategory.create({
    category:categoryId,
    subcategory
  });

  res.status(StatusCodes.CREATED).json({newCategory})
} 
const addSubSubCategory = async (req, res) => {
  const { id: subcategoryId } = req.params;
  const { subSubcategory } = req.body;
  if(!subSubcategory){
    throw new CustomError.BadRequestError('Please provide subSubcategory')
  }
  const isSubSubCategoryExists = await MasterSubSubCategory.findOne({
    subSubcategory: subSubcategory,
  })
  if(isSubSubCategoryExists){
    throw new CustomError.BadRequestError("This category already exists")
  }

  const newCategory = await MasterSubSubCategory.create({
    subcategory:subcategoryId,
    subSubcategory
  });

  res.status(StatusCodes.CREATED).json({newCategory})
} 

const addStockToInventory = async (req, res) => {
    const {id:productId} = req.params
    const {price, stockLeft} = req.body

    if(price || stockLeft){
        throw new CustomError.BadRequestError('Please provide all values')
    }
    const isProductExists = await MasterPrice.findOne({subSubCategory:productId})

    if(isProductExists){
        throw new CustomError.BadRequestError('This product already exists')
    }

    const newStock = await MasterPrice.create({subSubCategory:productId, price, stockLeft})
    res.status(StatusCodes.CREATED).json({newStock})
};

const getStock = async (req, res) => {
  const { id: product_id } = req.params;
  const item = await MasterStock.findOne({ _id: product_id });
  console.log();
  res.send(item);
};

module.exports = {
  addStockToInventory,
  getStock,
  addCategory,
  addSubCategory,
  addSubSubCategory
};
