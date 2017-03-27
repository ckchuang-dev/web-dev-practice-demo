var express     = require("express"),
    passport    = require("passport"),
    router      = express.Router(),
    User        = require("../models/user");

//========================
// ROOT ROUTE
//========================
router.get("/", function(req,res){
    res.render("landing");
});

//========================
// REGISTER ROUTE
//========================
//show sign up form
router.get("/register", function(req, res){
    res.render("register");
});
//handling user sign up
router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            return res.render("register", {"error": err.message});
        } else {
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome to YelpCamp, " + user.username);
                res.redirect("/campgrounds");
            });
        }
    });
});

//========================
// LOGIN ROUTE
//========================
//show log in form
router.get("/login", function(req, res){
    res.render("login");
});
//handling user log in
router.post("/login", passport.authenticate("local",{
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){});

//========================
// LOGOUT ROUTE
//========================
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
});

module.exports = router;
