alert("CONNECTED!");

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
    paragraph.textContent = "Someone clicked the button!";
});


//SETUP MOUSE OVER LISTENER
paragraph.addEventListener("mouseover", function(){
    this.textContent = "YO, move your dirty hand out of me!"
});

//SETUP MOUSE OUT LISTENER
paragraph.addEventListener("mouseout", function(){
    this.textContent = "Thank you for leave me alone."
});
