const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Usuarios = mongoose.model('usuarios');

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    Usuarios.findById(id).then(user => {
      done(null, user);
    });
  });

passport.use(new LocalStrategy(
    async function(username, password, done) {
      /*User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });*/

      let existingUser = await Usuarios.findOne({ username: username });
      if (!existingUser) {
        existingUser = await new Usuarios({ username, password }).save();
      }
      return done(null, existingUser);
    }
  ));