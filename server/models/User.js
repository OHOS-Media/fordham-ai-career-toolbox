const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Uncomment to restrict authentication to Fordham emailss, another check in passport.js
    // validate: {
    //   validator: function (v) {
    //     return v.endsWith("@fordham.edu");
    //   },
    //   message: "Only Fordham University email addresses are allowed",
    // },
  },
  profilePicture: {
    type: String,
  },
  hasAcceptedTerms: {
    type: Boolean,
    default: false,
    required: true,
  },
  acceptedTermsAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  gradYear: {
    type: Number,
  },
  major: {
    type: String,
  },
  interestedPositions: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
