const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/usuarios.model');
require('./models/galerias.model');
require('./services/passport');

const app = express();
const PORT = process.env.PORT || 7771;


mongoose.connect(keys.databaseURL,{ useNewUrlParser: true });

app.use(bodyParser.json());
app.use(
    cookieSession({
        name:'localcookie777',
        maxAge: 40 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieSessionKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/galeriaRoutes')(app);


app.use(express.static(path.resolve("uploads")));
app.use(express.static(path.resolve("client","build")));
app.get("*", (req, res) => {
    if(req.url.match('/uploads/users/')){
        const file = req.url.split('/').filter(r => r.trim()).reverse();
        if(file.length >= 4) res.sendFile(path.resolve("uploads", "users", file[1], file[0] ));
        else res.status(404).send('Not found');
    }else{
        res.sendFile(path.resolve("client", "build", "index.html"));
    }
});

app.listen(PORT, ()=>{
    console.log(`app listening on port: ${PORT} ${process.env.NODE_ENV}`);
});