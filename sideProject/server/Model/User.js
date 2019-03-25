var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var userSchema = new mongoose.Schema({    
    username: String,
    email : String,
    emailIsAuthenticated: Boolean, 
    password : String,
    friends : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }],
    schoolYear : Number,
    major : String
    

})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema); 