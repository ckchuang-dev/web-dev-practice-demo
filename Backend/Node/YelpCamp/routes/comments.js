var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Campground  = require("../models/campground"),
    Comment     = require("../models/comment"),
    middleware  = require("../middleware");

//COMMENT NEW
router.get("/new", middleware.isLoggedIn, function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err) {
            res.redirect("back");
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

//COMMENT CREATE
router.post("/", middleware.isLoggedIn, function(req, res){
    //lookup campground by id
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            res.redirect("back");
        } else {
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err) {
                    res.redirect("back");
                } else {
                    //add username and if to a comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    //redirect to campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

//EDIT
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        } else {
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
        }
    });
});

//UPDATE
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    //Add express-sanitizer to prevent middleware script in comment
    req.body.comment.text = req.sanitize(req.body.comment.text);
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
        if(err){
            res.redirect("back");
        } else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//DELETE
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;
