// server/middleware/usageMiddleware.js
const { checkUsage, resetIfNeeded } = require("../controllers/UserUsage.controller.js");

const checkUsageLimit = async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: "Authentication required" });
    }

    let usage = await checkUsage(req.user._id);
    usage = await resetIfNeeded(usage);

    if (usage.remainingUses <= 0) {
      return res.status(403).json({
        error: "Monthly usage limit reached",
        resetDate: usage.resetDate,
        remainingUses: 0,
      });
    }

    req.userUsage = usage;
    return next();
  } catch (error) {
    res.status(500).json({ error: "Error checking usage limit" });
  }
};

module.exports = checkUsageLimit;
