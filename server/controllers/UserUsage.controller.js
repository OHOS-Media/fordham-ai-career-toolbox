// server/controllers/UserUsage.controller.js
const UserUsage = require("../models/UserUsage.js");

exports.checkUsage = async (userId) => {
  let usage = await UserUsage.findOne({ userId });
  if (!usage) {
    usage = await UserUsage.create({ userId });
  }
  return usage;
};

exports.resetIfNeeded = async (usage) => {
  const now = new Date();
  if (now >= usage.resetDate) {
    usage.remainingUses = 20; // Change from 30 to 20
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    usage.resetDate = nextWeek;
    await usage.save();
  }
  return usage;
};

exports.decrementUsage = async (usage) => {
  if (usage.remainingUses > 0) {
    usage.remainingUses--;
    await usage.save();
    return true;
  }
  return false;
};
