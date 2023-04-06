const express = require('express')
const router = express.Router()


const {
    getData,
    getData1,
    getData2,
    getData3
} = require('../../controllers/User/aditya')

router.get('/on', getData)
router.get('/humidity', getData2)
router.get('/temperature', getData3)
router.get('/off', getData1)

module.exports = router