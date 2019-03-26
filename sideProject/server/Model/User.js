var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
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
userSchema.pre('save', function(next) {
    const user = this

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err)

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err)

            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var User = mongoose.model('user', userSchema);
  
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema); 