const mongoose = require("mongoose");


const MasterStockSchema = new mongoose.Schema(
  {
    master: {
      type: mongoose.Schema.ObjectId,
      ref: "Master",
      required: true,
    },
    category: {
      type:String,
      enum:["Fruits_Vegetables", "Munchies", "Biscuits"],
      required:true,
      unique:true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MasterStock", MasterStockSchema);
