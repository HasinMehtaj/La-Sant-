//routes plan

const express = require('express');
const router = express.Router();
const Plan = require('../models/plan');
const User = require('../models/user');
const auth = require('../middleware/auth');
const { createUserProgresses } = require('../controllers/progress.ctrl');

router.post('/api/plan/suggestPlan', auth, async (req, res) => {
	const userId = req.user._id;
	try {
		// planType === "Diet" || "Workout"
		// bmi => bmi of the user
		let { planType, bmi } = req.body;

		let planTitle = '';

<<<<<<< HEAD
    if (bmi < 18) {
      if (planType === "Diet") {
        planTitle = "Diet Plans for Underweight People";
      } else if (planType === "Workout") {
        planTitle = "Workout Plans for Underweight People";
      }
    } else if (bmi >= 18 && bmi <= 25) {
      if (planType === "Diet") {
        planTitle = "Diet Plans for Fit People";
      } else if (planType === "Workout") {
        planTitle = "Workout Plans for Fit People";
      }
    } else if (bmi > 25) {
      if (planType === "Diet") {
        planTitle = "Diet Plans for Overweight People";
      } else if (planType === "Workout") {
        planTitle = "Workout Plans for Overweight People";
      }
    }
=======
		if (bmi < 18) {
			if (planType === 'Diet') {
				planTitle = 'Diet Plans for Underweight People';
			} else if (planType === 'Workout') {
				planTitle = 'Workout Plans for Underweight People';
			}
		} else if (bmi >= 18 && bmi <= 25) {
			if (planType === 'Diet') {
				planTitle = 'Diet Plans for Fit People';
			} else if (planType === 'Workout') {
				planTitle = 'Workout Plans for Fit People';
			}
		} else if (bmi > 25) {
			if (planType === 'Diet') {
				planTitle = 'Diet Plans for Overweight People';
			} else if (planType === 'Workout') {
				planTitle = 'Workout Plans for Overweight People';
			}
		}
>>>>>>> 0c021eae4ba3807e589226655b8da4652cc775d7

		let plan = await Plan.findOne({ title: planTitle, type: planType });

		res.json(plan);

		if (planType === 'Diet') {
			await User.findByIdAndUpdate(
				userId,
				{
					dietPlan_id: plan._id,
				},
				{
					useFindAndModify: false,
				}
			);
		} else if (planType === 'Workout') {
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
		console.error('error', error);
		res.status(500).json({ error });
	}
});

router.post('/api/plan', async (req, res) => {
	try {
		let plan = new Plan(req.body);
		await plan.save();

		res.json(plan);
	} catch (error) {
		res.status(500).json({ error });
		console.error('error', error);
	}
});

router.get('/api/plan', async (req, res) => {
	try {
		let plan = await type.findOne({ plan: req.plan._id }).sort({ _id: -1 });
		res.json(plan);
	} catch (error) {
		console.error('error', error);
	}
});

router.get("/api/plan", async (req, res) => {
  try {
    let plan = await type.findOne({ plan: req.plan._id }).sort({ _id: -1 });
    res.json(plan);
  } catch (error) {
    console.error("error", error);
  }
});

module.exports = router;
