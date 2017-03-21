var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Taipei",
        image: "https://farm8.staticflickr.com/7619/16210674244_9cb0b4a62b.jpg",
        description: "blah blah blah blah"
    },
    {
        name: "Kaohsiung",
        image: "https://farm3.staticflickr.com/2942/15375375972_77322352c1.jpg",
        description: "blah blah blah blah"
    },
    {
        name: "Hsinchu",
        image: "https://farm7.staticflickr.com/6116/6226051112_c019f4bb4f.jpg",
        description: "blah blah blah blah"
    },
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("Remove all campfrounds!");
            //Add some campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Add data!");
                        //Add a comment
                        Comment.create(
                        {
                            text: "The sunset is amazing!",
                            author: "Dez"
                        }, function(err, comment){
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Comment added!");
                            }
                        });
                    }
                });
            });
        }
    });
    
}

module.exports = seedDB;
