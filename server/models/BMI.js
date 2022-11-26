//BMI Schema

const mongoose = require("mongoose");

const BMISchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },

    mass: {
      type: Number,
      required: [true, "Please provide mass in pound"],
    },

    height: {
      type: Number,
      required: [true, "Please provide height in feet"],
    },

    BMI: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BMI = mongoose.model("BMI", BMISchema);

module.exports = BMI;
