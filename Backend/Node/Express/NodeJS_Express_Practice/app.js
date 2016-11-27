var express = require("express");
var app = express();

//Visiting "/"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my practice!");
});


//Visiting "/speak/pig"
//Visiting "/speak/cow"
//Visiting "/speak/dog"
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        fox: "HaTiHaTiHaTiHo",
        cat: "You know nothing, Jon Snow",
        goldfish: "..."
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says \"" + sound + "\"!");
});

//Visiting "/repeat/hello/3"
//Visiting "/repeat/hello/5"
//Visiting "/repeat/blah/2"
app.get("/repeat/:msg/:num", function(req, res){
    var msg = req.params.msg;
    var num = Number(req.params.num);
    //res.send(msg + " " + num);
    var output = "";
    for(var i = 0; i < num; i++){
        output += msg;
        output += " ";
    }
    res.send(output);
});

//If any other route
app.get("*", function(req, res){
    res.send("Sorry, page not found... Please check it again!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
