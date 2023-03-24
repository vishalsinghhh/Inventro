const express = require("express");
const router = express.Router();
const {
  authenticateUser,
} = require("../../middleware/authentication");

const {registerAdmin, addServiceLocations} = require('../../controllers/Master/manageAdminController')

router.route("/registerAdmin").post(authenticateUser,registerAdmin )
router.route("/addServiceLocation/:id").post(authenticateUser,addServiceLocations )

module.exports = router;
