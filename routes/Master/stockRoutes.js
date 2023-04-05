const express = require("express");
const router = express.Router();
const {
  authenticateUser,
} = require("../../middleware/authentication");

const {addStockToInventory, getStock, addCategory, addSubCategory, addSubSubCategory} = require('../../controllers/Master/manageStock')


router.route("/addCategory").post(authenticateUser,addCategory )
router.route("/addSubcategory/:id").post(authenticateUser,addSubCategory )
router.route("/addSubSubCategory/:id").post(authenticateUser,addSubSubCategory )
router.route("/:id").get(authenticateUser,getStock )
router.route("/addStock/:id").post(authenticateUser,addStockToInventory )

module.exports = router;
