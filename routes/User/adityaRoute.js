const express = require('express')
const router = express.Router()


const {
    getData,
    getData1
} = require('../../controllers/User/aditya')

router.get('/', getData)
router.get('/off', getData1)

module.exports = router