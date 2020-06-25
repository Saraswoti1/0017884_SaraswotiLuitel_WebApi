const mongoose = require ('mongoose');

var Comments = new Schema({
    title     : String
  , body      : String
  , date      : Date
});

var CommentPost = new Schema({
    author    : ObjectId,
   title     : String,
   body      : String,
   date      : Date,
   comments  : [Comments]

});

module.exports = mongoose.model('CommentPost', CommentPost);