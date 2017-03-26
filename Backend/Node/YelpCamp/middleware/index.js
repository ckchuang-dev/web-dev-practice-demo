var Campground  = require("../models/campground"),
    Comment     = require("../models/comment");

// All the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    //is user logged in?
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err) {
                console.log(err);
                res.redirect("back");
            } else {
                //does this user own the campground?
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    //is user logged in?
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err) {
                res.redirect("back");
            } else {
                //does this user own the campground?
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
};

//middleware to check secret page access authentication
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = middlewareObj;
