var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Taipei",
        image: "https://farm8.staticflickr.com/7619/16210674244_9cb0b4a62b.jpg",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
        name: "Kaohsiung",
        image: "https://farm3.staticflickr.com/2942/15375375972_77322352c1.jpg",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
        name: "Hsinchu",
        image: "https://farm7.staticflickr.com/6116/6226051112_c019f4bb4f.jpg",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
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
