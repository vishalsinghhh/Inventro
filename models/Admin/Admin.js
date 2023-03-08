const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema(
  {
    phone: {
      type: Number,
      unique: true,
      minlength: 10,
      required: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: validator.isStrongPassword,
        message: "Please provide a strong password",
      },
    },
    role: {
      type: String,
      enum: ["master", "user", "admin"],
      default: "admin",
    },
    masterId: {
      type: mongoose.Types.ObjectId,
      ref: "Master",
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    panCardNo:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

AdminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

AdminSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Admin", AdminSchema);
