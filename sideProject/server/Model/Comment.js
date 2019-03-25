 var mongoose = require("mongoose");

 var commentSchema = new mongoose.Schema ({
     author : {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
     },
     content : String,
     like: Number,
     dislike : Number 
 })

 module.exports = mongoose.model("Comment", commentSchema); 