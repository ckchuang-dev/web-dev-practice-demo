alert("CONNECTED!");

var allLi =  document.querySelectorAll("li");

for (var i = 0; i < allLi.length; i++){
    allLi[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });

    allLi[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });

    allLi[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}
