require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

const app = express();

// Database connection
require("./config/db");

// CORS configuration for the client URL
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
};

app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Trust the first proxy to enable cookie sharing between the client and the server
app.set("trust proxy", 1);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      httpOnly: true,
      sameSite: "none", // Required for cross-site cookie
      maxAge: 30 * 24 * 60 * 60 * 1000, // 20 days
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/test"));

// Test route
app.get("/", (req, res) => {
  res.send("AI Career Toolbox server is running!");
});

// Error handling middleware (move this to the end)
app.use(require("./utils/errorHandler"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
