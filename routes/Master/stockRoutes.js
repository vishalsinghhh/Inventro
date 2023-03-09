const express = require("express");
const router = express.Router();
const {
  authenticateUser,
} = require("../../middleware/authentication");

const {addStockToInventory} = require('../../controllers/Master/manageStock')

router.route("/addStock").post(authenticateUser,addStockToInventory )

module.exports = router;
