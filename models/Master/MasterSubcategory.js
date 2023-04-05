const mongoose = require("mongoose");

const MasterSubStockSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "MasterStock",
      required: true,
    },
    subcategory: {
      type: String,
      enum: [
        "Fruits",
        "Vegetables",
        "Leaves_Flowers",
        "Chips",
        "Nachos",
        "Cookies",
        "Creamfills",
      ],
      required: true,
      unique:true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MasterSubStock", MasterSubStockSchema);
