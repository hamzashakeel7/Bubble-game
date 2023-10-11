
var Timer = 60
var score = 0
var HitRn = 0


function makeBubble(){
    var clutter = "";

    for(var i = 1; i<=160; i++){
        var num = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${num}</div>`;
    }

document.querySelector("#pbtm").innerHTML = clutter
}

function setTime(){
    var TimeInt = setInterval(function(){
        if(Timer > 0){
            Timer--;
            document.querySelector("#TimeVal").textContent = Timer;
        }
        else {
            clearInterval(TimeInt);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`
        }
    }, 1000); 
}

function NewHit(){
    HitRn = Math.floor(Math.random()*10)
    document.querySelector("#RnHit").textContent = HitRn
}

function IncreaseScore(){
    score += 10;
    document.querySelector("#ScoreVal").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function (details) {
    ClickedNum = (Number(details.target.textContent));
    if (ClickedNum === HitRn) {
        IncreaseScore();
        makeBubble();
        NewHit();   
    }
})



makeBubble();
setTime();
NewHit();

