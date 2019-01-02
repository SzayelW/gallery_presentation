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
      if(!username.trim()) return done(null, false);
      
      let existingUser = await Usuarios.findOne({ username: username.toLowerCase() });
      if (!existingUser) {
        existingUser = await new Usuarios({ username, password }).save();
      }

      if(existingUser.password === password) return done(null, existingUser);
      else return done(null, false); 
    }
  ));