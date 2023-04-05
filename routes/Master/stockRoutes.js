const express = require("express");
const router = express.Router();
const {
  authenticateUser,
} = require("../../middleware/authentication");

const {addStockToInventory, getStock, addCategory, addSubCategory} = require('../../controllers/Master/manageStock')

router.route("/addStock").post(authenticateUser,addStockToInventory )
router.route("/addCategory").post(authenticateUser,addCategory )
router.route("/addSubcategory/:id").post(authenticateUser,addSubCategory )
router.route("/:id").get(authenticateUser,getStock )

module.exports = router;
