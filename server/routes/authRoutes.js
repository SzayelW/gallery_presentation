const passport = require('passport');

module.exports = (app) => {
  app.post('/login', passport.authenticate('local'), (req, res) =>{
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });
}