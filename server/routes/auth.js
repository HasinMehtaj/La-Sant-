const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

router.route("/api/auth/register").post(register);

router.route("/api/auth/login").post(login);

module.exports = router;
