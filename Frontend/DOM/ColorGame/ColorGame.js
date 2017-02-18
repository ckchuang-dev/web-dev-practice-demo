var numOfSquares = 6;
var colors = genColorList(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("message");
var h1Display = document.querySelector("h1");
var resetBtn = document.getElementById("resetBtn");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickColor = this.style.background;
        if (clickColor === pickedColor){
            changeColor(pickedColor);
            msgDisplay.textContent = "Correct!";
            resetBtn.textContent = "Play again?"
            h1Display.style.background = pickedColor;
        }
        else {
            this.style.background = "#232323";
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

resetBtn.addEventListener("click", function(){
    colors = genColorList(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1Display.style.background = "steelblue";
    msgDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
});

easyBtn.addEventListener("click", function(){
    h1Display.style.background = "steelblue";
    hardBtn.classList.remove("selected");
    this.classList.add("selected");
    numOfSquares = 3;
    colors = genColorList(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    h1Display.style.background = "steelblue";
    easyBtn.classList.remove("selected");
    this.classList.add("selected");
    numOfSquares = 6;
    colors = genColorList(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

