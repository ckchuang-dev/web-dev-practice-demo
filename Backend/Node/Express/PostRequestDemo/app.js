var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Amy", "Bety", "Chrissy", "Dora", "Emily"];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");    
});

app.post("/addFriends", function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER STARTED!!");
});