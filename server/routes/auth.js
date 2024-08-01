// routes/auth.js
const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google OAuth login route
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // console.log('Google callback - User:', req.user ? req.user.id : 'No user');
    // console.log('Google callback - Session:', req.sessionID);
    // console.log('Google callback - Is Authenticated:', req.isAuthenticated());
    res.redirect(`${process.env.CLIENT_URL}/profile`);
  }
);

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res
        .status(500)
        .json({ error: "Could not log out, please try again" });
    }
    res.json({ message: "Logout successful" });
  });
});

module.exports = router;
