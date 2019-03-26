const express = require('express');
const path = require('path');
var request = require("request");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var mongoDB = require("mongodb");
var moment = require('moment');
var User = require('./Model/User'); 
mongoose.connect('mongodb://localhost:27017/side_project');

var auth = require('passport-local-authenticate');


var app = express(),
passport = require("passport"),
LocalStrategy = require("passport-local");
app.use(require("express-session")({
    secret: "this project is made by sejin",
    resave: false,
    saveUninitialized: false 
})); 
app.use(passport.initialize());
app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()));
passport.use(new LocalStrategy(
    function(username, password, done) {
    
      User.findOne({ username: username }, function(err, user) {
        if (err) { 
            console.log("1");
            return done(err);
        }
        if (!user) {

            console.log("2");
          return done(null, false, { message: 'Incorrect username.' });
        }
        user.comparePassword(password, function(err, isMatch) {
            if (err) throw err;
            if (!isMatch){
                return done(null, false, { message: 'Incorrect password' });
            }else
            {

        return done(null, true);
            }
        });

      });
    }
)
); 

  
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// An api endpoint that returns a short list of items
app.get('', (req,res) => {
})

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
})
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("back");
}

app.post('/api/register', (req,res) => {
    User.find({email: req.body.email})
    .exec(function(err,users){
        if(users.length > 0) {
            res.json({"result": "email already registered"})
        }
    }); 

    var new_user = new User({
        username: req.body.username,    email : req.body.email, 
         emailIsAuthenticated: false, major: req.body.major, schoolYear: req.body.schoolYear  
        , password : req.body.password
     });
     console.log(new_user);
      new_user.save(function(err) {
       if(err){
            res.json({"result": "unsuccessful"});
        }else {
        passport.authenticate("local")(req,res,function(){
            
        });
        res.json({"result": "successful"})
	}
    });
});

app.get("/loginFailure", function(req,res) {
    res.json({"result": "failure"});
});


app.get("/loginSuccess", function(req,res) {
    res.json({"result": "success"});
});

app.post('/api/login',
  passport.authenticate('local', {  successRedirect : "/loginSuccess", 
  failureRedirect : "/loginFailure"})
);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
