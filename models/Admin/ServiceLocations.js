const mongoose = require("mongoose")

const ServiceLocationSchema = new mongoose.Schema({
    admin:{
        type: mongoose.Schema.ObjectId,
        ref: "Admin",
        required: true
    },
    master:{
        type: mongoose.Schema.ObjectId,
        ref: "Master",
        required: true
    },
    pincode:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    shopNum:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('ServiceLocation', ServiceLocationSchema)