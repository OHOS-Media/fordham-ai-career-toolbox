require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

const app = express();

// Database connection
require('./config/db');

// CORS
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/user'));

// Error handling middleware (move this to the end)
app.use(require('./utils/errorHandler'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));