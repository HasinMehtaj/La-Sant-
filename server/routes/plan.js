//routes plan

const express = require("express");
const router = express.Router();
const Plan = require("../models/plan");
const User = require("../models/User");
const auth = require("../middleware/auth");

const createUserProgresses = async (req, res) => {
  try {
    let { user, planId } = req;
  } catch (error) {
    console.error("createUserProgresses -> error", error);
  }
};

router.post("/api/plan/suggestPlan", auth, async (req, res) => {
  const userId = req.user._id;
  try {
    // planType === "Diet" || "Workout"
    // bmi => bmi of the user
    let { planType, bmi } = req.body;

    let planTitle = "";

    if (bmi < 18) {
      if (planType === "Diet") {
        planTitle = "";
      } else if (planType === "Workout") {
        planTitle = "";
      }
    } else if (bmi >= 18 && bmi <= 25) {
      if (planType === "Diet") {
        planTitle = "";
      } else if (planType === "Workout") {
        planTitle = "";
      }
    } else if (bmi > 25) {
      if (planType === "Diet") {
        planTitle = "Diet Plan Test 1";
      } else if (planType === "Workout") {
        planTitle = "";
      }
    }

    let plan = await Plan.findOne({ title: planTitle, type: planType });

    res.json(plan);

    if (planType === "Diet") {
      await User.findByIdAndUpdate(
        userId,
        {
          dietPlan_id: plan._id,
        },
        {
          useFindAndModify: false,
        }
      );
    } else if (planType === "Workout") {
      await User.findByIdAndUpdate(
        userId,
        {
          workoutPlan_id: plan._id,
        },
        {
          useFindAndModify: false,
        }
      );
    }

    req.planId = plan._id;

    await createUserProgresses(req, res);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error });
  }
});

router.post("/api/plan", async (req, res) => {
  try {
    let plan = new Plan(req.body);
    await plan.save();

    res.json(plan);
  } catch (error) {
    res.status(500).json({ error });
    console.error("error", error);
  }
});
module.exports = router;
