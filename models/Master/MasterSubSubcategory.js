const mongoose = require("mongoose");

const MasterSubSubStockSchema = new mongoose.Schema(
  {
    subcategory: {
        type: mongoose.Schema.ObjectId,
        ref: "MasterSubStock",
        required: true,
    },
    subSubcategory: {
        type:String,
        enum:["Apple", "Pomegranate", "Black Grapes", "Tomato", "Onion"],
        required:true,
        unique:true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("MasterSubSubStock", MasterSubSubStockSchema)