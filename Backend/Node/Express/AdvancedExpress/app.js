var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("jungle");
});

app.get("/group/:camp", function(req, res){
    var thing = req.params.camp;
    res.render("route", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Your will, my hand.", author: "Lee"},
        {title: "I smell their stench!", author: "Warwick"},
        {title: "Don't you trust me?", author: "Ahri"},
        ];

    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!!!");
});