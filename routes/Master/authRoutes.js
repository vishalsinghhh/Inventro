const express = require('express')
const router = express.Router()

const {
    registerMaster,
    loginMaster
} = require('../../controllers/Master/authController')

// router.post('/register', registerMaster)
router.post('/login', loginMaster)

module.exports = router