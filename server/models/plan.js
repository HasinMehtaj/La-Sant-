//plan schema

const mongoose = require("mongoose");

const todoSubSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    week_number: Number,
    weekday: Number,
    calorie_difference: Number,
  },
  {
    timestamps: true,
  }
);

const PlanSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["Workout", "Diet"],
    },
    description: String,
    todos: [todoSubSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("plan", PlanSchema);
