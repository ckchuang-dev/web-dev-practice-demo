function genRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function genColorList(len){
    var colorList = [];
    for (var i = 0; i < len; i++){
        colorList.push(genRandomColor());
    }
    return colorList;
}

var colors = genColorList(9);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickColor = this.style.background;
        if (clickColor === pickedColor){
            changeColor(pickedColor);
            msgDisplay.textContent = "Correct!";
        }
        else {
            this.style.background = "#536278";
            msgDisplay.textContent = "Try again!";
        }
    });
}

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


