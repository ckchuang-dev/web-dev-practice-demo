var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
    {name: "Granite Hill", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
];

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campfrounds array in app.js
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redircet back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});