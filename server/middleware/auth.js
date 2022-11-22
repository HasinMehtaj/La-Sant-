const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  if (!req.header("Authorization")) {
    return res.status(401).json({ error: "Access denied" });
  }

  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ error: "invalid token" });
  }
};
