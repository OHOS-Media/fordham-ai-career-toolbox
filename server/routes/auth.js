const express = require("express");
const passport = require("passport");
const User = require("../models/User"); // Add this import
const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/login-failed" }),
  (req, res) => {
    res.send(`
      <html>
        <body>
          <script>
            window.opener.postMessage({ 
              type: "LOGIN_SUCCESS",
              requiresTerms: ${!req.user.hasAcceptedTerms},
            }, "${process.env.CLIENT_URL}");
            window.close();
          </script>
        </body>
      </html>
    `);
  }
);

router.get("/login-failed", (req, res) => {
  res.send(`
    <html>
      <body>
        <script>
          window.opener.postMessage(
            { 
              type: "LOGIN_ERROR", 
              message: "Only Fordham University personnel are allowed." 
            }, 
            "${process.env.CLIENT_URL}"
          );
          window.close();
        </script>
      </body>
    </html>
  `);
});

router.post("/accept-terms", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const user = await User.findById(req.user.id);
    user.hasAcceptedTerms = true;
    user.acceptedTermsAt = new Date();
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to accept terms" });
  }
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to logout" });
    }
    res.json({ success: true });
  });
});

module.exports = router;
