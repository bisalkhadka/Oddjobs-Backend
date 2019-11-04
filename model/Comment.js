const mongoose=require("mongoose");
var Schema=mongoose.Schema;
const comSchema = mongoose.Schema({
    JobID: Schema.Types.ObjectId,

    Review:{
        type:String
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
  
});
const Comment=mongoose.model("Comment",comSchema);
module.exports= Comment;