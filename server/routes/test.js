// route to test and health check
const express = require("express");
const router = express.Router();

// Hello route, get to display a message from the server
router.get("/", (req, res) => {
  res.send("Hello from the AI Career Toolbox server!");
});

// Test route to check server status and environment
router.get("/test", (req, res) => {
  res.json({
    status: "Server is running",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
    // Add any other relevant information you want to check
    mongodbConnected: !!process.env.MONGODB_URI,
    googleAuthConfigured: !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
    sessionSecretConfigured: !!process.env.SESSION_SECRET,
  });
});

// Health check route for load balancers or monitoring services
router.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;
