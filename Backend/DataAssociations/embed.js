//Data Association - one to many
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = User({
//     email: "boosted@animal.com",
//     name: "nightblue3"
// });

// newUser.posts.push({
//     title: "How to jungle with twitch?",
//     content: "Choose it, AFK! Just kidding."
// });

// newUser.save(function(err, user){
//   if(err) {
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// var newPost = Post({
//     title: "Multiple seasons challenger",
//     content: "What do you mean, get outta my jungle!"
// });
// newPost.save(function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name:"nightblue3"}, function(err, user){
   if (err) {
       console.log(err);
   } else {
        user.posts.push({
            title: "You are such a kappa!",
            content: "CY@"
        });
        user.save(function(err, user){
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
   }
});