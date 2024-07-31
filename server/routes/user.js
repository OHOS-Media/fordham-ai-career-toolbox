// routes/user.js
const express = require("express");
const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  console.log("isAuthenticated:", req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: "Not authenticated" });
};

// User route to get user data
router.get("/user", isAuthenticated, (req, res) => {
  console.log("User route accessed, user:", req.user);
  res.json({
    id: req.user.id,
    displayName: req.user.displayName,
    email: req.user.email,
    profilePicture: req.user.profilePicture,
  });
});

module.exports = router;
