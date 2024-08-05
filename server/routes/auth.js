const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google OAuth login route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/login-failed" }),
  (req, res) => {
    res.send(`
      <html>
        <body>
          <script>
            window.opener.postMessage({ type: "LOGIN_SUCCESS" }, "${process.env.CLIENT_URL}");
            window.close();
          </script>
        </body>
      </html>
    `);
  }
);

// Login failed route
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

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ error: "Could not log out, please try again" });
    }
    res.json({ message: "Logout successful" });
  });
});

module.exports = router;
