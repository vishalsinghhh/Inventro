const express = require("express");
const router = express.Router();
const {
  authenticateUser,
} = require("../../middleware/authentication");

const {addStockToInventory, getStock} = require('../../controllers/Master/manageStock')

router.route("/addStock").post(authenticateUser,addStockToInventory )
router.route("/:id").get(authenticateUser,getStock )

module.exports = router;
