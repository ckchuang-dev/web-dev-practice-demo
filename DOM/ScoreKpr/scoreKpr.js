var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.getElementById("p2Btn");
var resetBtn = document.getElementById("resetBtn");
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var p1ScoreRet = 0;
var p2ScoreRet = 0;
var gameOver = false;
var winScore = 5;

p1Btn.addEventListener("click", function(){
    if(!gameOver){
        p1ScoreRet++;
        if(p1ScoreRet === winScore){
            p1Score.classList.toggle("winner");
            gameOver = true;
        }
        p1Score.textContent = p1ScoreRet;
    }
});

p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2ScoreRet++;
        if(p2ScoreRet === winScore){
            p2Score.classList.toggle("winner");
            gameOver = true;
        }
        p2Score.textContent = p2ScoreRet;
    }
});

resetBtn.addEventListener("click", function(){
    p1ScoreRet = 0;
    p2ScoreRet = 0;
    p1Score.textContent = p1ScoreRet;
    p2Score.textContent = p2ScoreRet;
    p1Score.classList.remove("winner");
    p2Score.classList.remove("winner");
    gameOver = false;
});