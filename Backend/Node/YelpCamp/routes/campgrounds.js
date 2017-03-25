var express     = require("express"),
    router      = express.Router(),
    Campground  = require("../models/campground");

//INDEX - Show all campgrounds from DB
router.get("/", function(req,res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - Add new campgrounds to DB
router.post("/", function(req,res){
    //get data from form and add to campfrounds array in app.js
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    var newCampground = {name: name, image: image, desc: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redircet back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - Show form to create new campgrounds
router.get("/new", function(req,res){
    res.render("campgrounds/new");
});

//SHOW - Show more information about campgrounds
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });

});

module.exports = router;
