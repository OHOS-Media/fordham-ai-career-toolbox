module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      res.status(401).json({ error: 'Please log in to access this resource' });
    }
  };