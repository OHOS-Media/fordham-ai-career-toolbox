// server/middleware/requireTerms.js
const User = require("../models/User");

const requireTerms = async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const user = await User.findById(req.user._id);

    if (!user.hasAcceptedTerms) {
      return res.status(403).json({
        error: "Terms acceptance required",
        requiresTerms: true,
      });
    }

    next();
  } catch (error) {
    console.error("Terms middleware error:", error);
    res.status(500).json({ error: "Server error checking terms acceptance" });
  }
};

module.exports = requireTerms;
