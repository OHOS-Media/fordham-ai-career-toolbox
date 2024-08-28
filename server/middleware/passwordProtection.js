const passwordProtection = (req, res, next) => {
  const bypass = req.cookies.siteAccessGranted === "true";

  if (bypass) {
    return next();
  }

  const { password } = req.body;

  if (password === process.env.SITE_PASSWORD) {
    res.cookie("siteAccessGranted", "true", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // 24 hours
    return next();
  }

  res.status(401).json({ error: "Incorrect password" });
};

module.exports = passwordProtection;
