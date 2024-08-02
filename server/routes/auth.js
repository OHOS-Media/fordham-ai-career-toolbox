// routes/auth.js
const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google OAuth login route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth callback route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
    failureMessage: true,
  }),
  (req, res) => {
    res.send('<script>window.opener.postMessage("success", "*"); window.close();</script>');
  }
);

// Failure route
router.get("/google/failure", (req, res) => {
  const errorMessage = req.session.messages ? req.session.messages[0] : "Authentication failed";
  res.send(
    `<script>window.opener.postMessage(JSON.stringify({ status: "failure", message: "${errorMessage}" }), "*"); window.close();</script>`
  );
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ error: "Could not log out, please try again" });
    }
    res.json({ message: "Logout successful" });
  });
});

module.exports = router;
