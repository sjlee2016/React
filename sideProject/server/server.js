const express = require('express');
const path = require('path');
var request = require("request");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var mongoDB = require("mongodb");
var moment = require('moment');
var User = require('./Model/User'); 
mongoose.connect('mongodb://localhost:27017/side_project');



var app = express(),
passport = require("passport"),
LocalStrategy = require("passport-local")
app.use(require("express-session")({
    secret: "this project is made by sejin",
    resave: false,
    saveUninitialized: false 
})); 

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
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

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
