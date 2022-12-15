const Progress = require("../models/progress");
const Plan = require("../models/plan");

/* 
  pass planId as req body when it's being called from its api route
*/
const createUserProgresses = async (req, res) => {
  try {
    let { user, planId } = req;
    if (!planId) planId = req.body.planId;

    let currentMonthNumber = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    let plan = await Plan.findById(planId);

    let todoIds = plan.todos.map((todo) => ({
      todo_id: todo._id,
      isComplete: false,
    }));

    let progress = new Progress({
      user_id: user._id,
      plan_id: planId,
      month: currentMonthNumber,
      year: currentYear,
      todos: todoIds,
    });

    await progress.save();

    if (!req.planId) res.json(progress);
  } catch (error) {
    console.error("createUserProgresses -> error", error);
  }
};

const updateProgressTodo = async (req, res) => {
  try {
    /* todoIndex is the week day between 0 and 27 */
    let { plan_id, month, year, todoIndex } = req.body;
    let user = req.user;

    let progress = await Progress.findOne({
      month,
      year,
      plan_id: plan_id.toString(),
      user_id: user._id.toString(),
    });

    progress.todos[todoIndex].isComplete =
      !progress.todos[todoIndex].isComplete;

    await progress.save();
    console.log(progress);
    res.json(progress);
  } catch (error) {
    console.error(
      "🚀 -> file: progress.ctrl.js -> line 43 -> updateProgressTodo -> error",
      error
    );
  }
};

const getUserProgress = async (req, res) => {
  try {
    let { plan_id, month, year } = req.body;
    let user = req.user;

    let progress = await Progress.findOne({
      month,
      year,
      plan_id: plan_id.toString(),
      user_id: user._id.toString(),
    });

    res.json(progress);
  } catch (error) {
    console.error(
      "🚀 -> file: progress.ctrl.js:69 -> getUserProgress -> error",
      error
    );
  }
};

module.exports = {
  createUserProgresses,
  updateProgressTodo,
  getUserProgress,
};
