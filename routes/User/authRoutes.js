const express = require('express')
const router = express.Router()

const {
    registerUser
} = require('../../controllers/User/authController')

router.post('/register', registerUser)

module.exports = router