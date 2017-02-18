var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.getElementById("p2Btn");
var resetBtn = document.getElementById("resetBtn");
var p1ScoreDisplay = document.getElementById("p1Score");
var p2ScoreDisplay = document.getElementById("p2Score");
var numInput = document.querySelector("input");
var winScoreDisplay = document.querySelector("p span");
var p1ScoreRet = 0;
var p2ScoreRet = 0;
var gameOver = false;
var winScore = 5;

p1Btn.addEventListener("click", function(){
    if(!gameOver){
        p1ScoreRet++;
        if(p1ScoreRet === winScore){
            p1ScoreDisplay.classList.add("winner");
            gameOver = true;
        }
        p1ScoreDisplay.textContent = p1ScoreRet;
    }
});

p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2ScoreRet++;
        if(p2ScoreRet === winScore){
            p2ScoreDisplay.classList.add("winner");
            gameOver = true;
        }
        p2ScoreDisplay.textContent = p2ScoreRet;
    }
});

function reset(){
    p1ScoreRet = 0;
    p2ScoreRet = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("winner");
    gameOver = false;
}

resetBtn.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    winScoreDisplay.textContent = this.value;
    winScore = Number(this.value);
    reset();
});