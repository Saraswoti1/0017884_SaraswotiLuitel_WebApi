const express= require('express');
const Commentpost =require('../models/comment');
const router =express.Router();

// retrieve my model
var BlogPost = mongoose.model('BlogPost');

// create a blog post
var post = new BlogPost();

// create a comment
post.comments.push({ title: 'My comment' });

post.save(function (err) {
  if (!err) console.log('Success!');
});

//removing the post
Commentpost.findById(myId, function (err, post) {
    if (!err) {
      post.comments[0].remove();
      post.save(function (err) {
        // do something
      });
    }
  });
  post.comments.id(my_id).remove();
post.save(function (err) {
  
});