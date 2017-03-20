//Data Association - one to many
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
    title: "How to play Twitch on Twitch? part 3",
    content: "blahblahblahblah"
}, function(err, post){
    User.findOne({email: "boosted@animal.com"}, function(err, foundUser){
      if(err) {
          console.log(err);
      } else {
          foundUser.posts.push(post);
          foundUser.save(function(err, data){
              if(err) {
                  console.log(err);
              } else {
                  console.log(data);
              }
          });
      }
    });
});

// User.create({
//     email: "boosted@animal.com",
//     name: "nightbloo"
// });

// Find user
// and find all posts for that user
User.findOne({email: "boosted@animal.com"}).populate("posts").exec(function(err, user){
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});