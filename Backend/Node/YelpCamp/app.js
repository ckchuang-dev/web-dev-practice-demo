var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    passportLocal   = require("passport-local"),
    methodOverride  = require("method-override"),
    expressSanitizer= require("express-sanitizer"),
    User            = require("./models/user"),
    SeedDB          = require("./seeds");

// requiring routes
var commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//SeedDB();

// passport configuration
app.use(require("express-session")({
    secret: "Yesterday I saw a lion kiss a deer",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(expressSanitizer());
app.use(methodOverride("_method"));

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// routes setting
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});
