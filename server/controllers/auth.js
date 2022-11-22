const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }
    const payload = {
      user: { _id: user._id, name: user.username },
    };

    user.password = undefined;

    jwt.sign(payload, process.env.JWT_SECRET, {}, (error, token) => {
      if (error) throw error;
      res.json({
        token,
        user,
      });
    });
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await new User({
      username,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: { _id: user._id, name: user.username },
    };

    user.password = undefined;

    jwt.sign(payload, process.env.JWT_SECRET, {}, (error, token) => {
      if (error) throw error;
      res.json({
        token,
        user,
      });
    });
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token });
};
