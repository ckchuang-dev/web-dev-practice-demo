var express     = require("express"),
    router      = express.Router(),
    Campground  = require("../models/campground"),
    middleware  = require("../middleware");

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
router.post("/", middleware.isLoggedIn, function(req,res){
    //get data from form and add to campground array in app.js
    var title = req.body.title;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {title: title, image: image, description: description, author: author};
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
router.get("/new", middleware.isLoggedIn, function(req,res){
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

//EDIT
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

//UPDATE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    //Add express-sanitizer to prevent middleware script in post
    req.body.campground.description = req.sanitize(req.body.campground.description);
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//DELETE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;
