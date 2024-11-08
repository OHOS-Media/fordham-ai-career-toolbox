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
    usage.remainingUses = 30;
    const nextMonth = new Date();
    nextMonth.setMonth(now.getMonth() + 1);
    usage.resetDate = nextMonth;
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
