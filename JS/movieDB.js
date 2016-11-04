var movie = [
    {title: "The Conjures", star: 5, watched: true},
    {title: "Fast and Furious", star: 4.5, watched: false},
    {title: "ID4 2", star: 3, watched: true},
    {title: "Dr. Strange", star: 4, watched: false},
]

movie.forEach(function(item){
    var outStr = "";
    if(item.watched){
        outStr += "You have watched ";
    }
    else{
        outStr += "You haven't watched ";
    }
    outStr += "\"" + item.title + "\"" + " - " + item.star + " stars.";
    console.log(outStr);
});
