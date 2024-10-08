const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if the email domain is fordham.edu
          const email = profile.emails[0].value;

          // Comment out the following {if} check to check Authorization/Profile Feature
          // if (!email.endsWith("@fordham.edu")) {
          //   return done(null, false, {
          //     message: "Only Fordham University personnel are allowed.",
          //   });
          // }

          let user = await User.findOne({ googleId: profile.id });
          if (!user) {
            user = await User.create({
              googleId: profile.id,
              displayName: profile.displayName,
              email: email,
              profilePicture: profile.photos[0].value,
            });
          } else {
            // Update the profile picture in case it has changed
            user.profilePicture = profile.photos[0].value;
            await user.save();
          }

          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};
