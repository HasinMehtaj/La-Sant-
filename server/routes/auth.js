const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  login,
  register,
  updateProfile,
  // forgetPassword,
  // forgetPasswordEmail,
  // saveVerifiedEmail,
} = require("../controllers/auth");

router.route("/api/auth/register").post(register);

router.route("/api/auth/login").post(login);

// router.route("/api/auth/updateProfile/:_id").put(updateProfile);

router.put("/api/auth/updateProfile/:_id", auth, updateProfile);

// router.route("/api/auth/forgetPassword").post(forgetPassword);

// router
//   .route("/api/auth/forgetPasswordEmail/:id/:token")
//   .post(forgetPasswordEmail);

// // Email Verification

// router.route("api/auth/saveVerifiedEmail").get(saveVerifiedEmail);

// router.post("/forgetpassword", auth.forgetPassword);
// router.post("/forgetpassword/:id/:token", auth.forgetPasswordEmail);

// Email Verification

// router.get("/verify/:token", auth.saveVerifiedEmail);

// Protected Routes

// router.post(
//   "/change-password",

//   auth.changePassword
// );

module.exports = router;
