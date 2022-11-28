const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Progress = require("../models/progress");
const {
  createUserProgresses,
  updateProgressTodo,
} = require("../controllers/progress.ctrl");

router.post("/api/progress/createProgress", auth, createUserProgresses);

router.put("/api/progress/updateTodo", auth, updateProgressTodo);

module.exports = router;
