const mongoose = require("mongoose");


const MasterPriceSchema = new mongoose.Schema(
  {
    subSubCategory: {
        type: mongoose.Schema.ObjectId,
        ref: "MasterSubSubStock",
        required: true,
    },
    price:{
        type:Number,
        required:true
    },
    stockLeft:{
        type:Number,
        required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MasterPrice", MasterPriceSchema);
