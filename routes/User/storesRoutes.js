const express = require("express");
const router = express.Router();
const {
  authenticateUser,
} = require("../../middleware/authentication");

const {getAllStores,
    getAllStoreProducts} = require('../../controllers/User/storesController')

router.route("/:id").get(authenticateUser,getAllStores )

module.exports = router;
