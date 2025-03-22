
var rn= 0;
var hit = 0;
let score = 0;
let lastScore = 0;
let currentTimer;  // Add this at the top with other variables

function gameElement(){
    var game = "";

for(var i=1; i<=160; i++){
    
    rn = Math.floor(Math.random()*10)
    game = game + `<div class="circle"> ${rn}</div>`;

}
document.querySelector("#container-btm").innerHTML=game;

}

function hitF(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hit-div").innerHTML = hit;

}

function timerF(){
    let time = 25;
    currentTimer = setInterval(function (){
        if(time > 0){
            time--;
            document.querySelector("#timer-div").innerHTML = time;
        }
        else{
            clearInterval(currentTimer);
            document.querySelector("#container-btm").innerHTML = `
                <div id="bck">
                    <h1>Time Up!!!</h1>
                    <h2 id="h2-bck">Your score is ${lastScore}</h2>
                    <button onclick="restartGame()" style="
                        padding: 10px 20px;
                        margin-top: 20px;
                        background: linear-gradient(145deg, #2196f3, #1976d2);
                        color: white;
                        border: none;
                        border-radius: 10px;
                        cursor: pointer;
                        font-size: 18px;
                        transition: all 0.3s ease;
                    ">Play Again</button>
                </div>`;
        }
    },1000);
}

function restartGame() {
    score = 0;
    lastScore = 0;
    document.querySelector("#score-div").innerHTML = "0";
    gameElement();
    hitF();
    timerF();
}



function scoreF(){
    score += 10;
    lastScore = document.querySelector("#score-div").innerHTML = score;
    
    // Add 5 seconds to timer
    let currentTime = Number(document.querySelector("#timer-div").innerHTML);
    document.querySelector("#timer-div").innerHTML = currentTime + 5;
};


document.querySelector("#container-btm").addEventListener("click", function(balls){
    let ball_num =Number(balls.target.innerHTML);

    if(ball_num === hit){
 
      gameElement(); 
       scoreF();
      hitF();  


   
    }
})





gameElement();
hitF();
timerF();
