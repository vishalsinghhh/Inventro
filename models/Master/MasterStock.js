const mongoose = require("mongoose");

const singleSubSubCategory = mongoose.Schema({
  subSubCategory: {
    type: String,
    enum: ["Apple", "Pomegranate", "Black Grapes", "Tomato", "Onion"],
    required: true,
  }
});

const singleSubCategory = mongoose.Schema({
  subCategory: {
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
    required: true
  },
  subSubCategory: [singleSubSubCategory],
});

const singleCategories = mongoose.Schema({
  category: {
    type: String,
    enum: ["Fruits_Vegetables", "Munchies", "Biscuits"],
    required: true
  },
  subCategory: [singleSubCategory],
})

const MasterStockSchema = new mongoose.Schema(
  {
    master: {
      type: mongoose.Schema.ObjectId,
      ref: "Master",
      required: true,
    },
    category: [singleCategories],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MasterStock", MasterStockSchema);
