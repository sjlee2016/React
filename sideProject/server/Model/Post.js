var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    title : String,
    sub_title : String,
    content : String,
    posted : Date,
    type : String ,
    comments : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],

    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" 
    },
    tag: [ String ]  
})

module.exports = mongoose.model("Post", postSchema);