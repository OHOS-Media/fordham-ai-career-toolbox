// routes/user.js
const express = require("express");
const router = express.Router();
const { checkUsage } = require("../controllers/UserUsage.controller.js");

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
  // console.log("Session:", req.session);
  // console.log("User:", req.user);
  console.log("User route accessed, user:", req.user);
  res.json({
    id: req.user.id,
    displayName: req.user.displayName,
    email: req.user.email,
    profilePicture: req.user.profilePicture,
    hasAcceptedTerms: req.user.hasAcceptedTerms,
    acceptedTermsAt: req.user.acceptedTermsAt,
  });
});

// Add usage endpoint
router.get("/usage", isAuthenticated, async (req, res) => {
  try {
    const usage = await checkUsage(req.user._id);
    res.json({
      remainingUses: usage.remainingUses,
      resetDate: usage.resetDate,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching usage data" });
  }
});

module.exports = router;
