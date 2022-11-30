//BMI routes
const express = require("express");
const router = express.Router();
const BMI = require("../models/BMI");
const auth = require("../middleware/auth");

router.post("/api/bmi", auth, async (req, res) => {
  try {
    let bmi = new BMI(req.body);
    bmi.BMI = req.body.mass / (req.body.height * req.body.height);
    bmi.user = req.user._id;
    await bmi.save();
    res.json(bmi);
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/bmi", auth, async (req, res) => {
  try {
    let bmi = await BMI.findOne({ user: req.user._id }).sort({ _id: -1 });
    res.json(bmi);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
