// server/models/UserUsage.js
const mongoose = require("mongoose");

const UserUsageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  remainingUses: {
    type: Number,
    default: 30,
  },
  resetDate: {
    type: Date,
    default: () => new Date(new Date().setMonth(new Date().getMonth() + 1)),
  },
});

module.exports = mongoose.model("UserUsage", UserUsageSchema);
