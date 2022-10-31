//wait for the dom to finish loading before running the game
//get the button elements and add the listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button")

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")==="submit"){
                checkBtnPressed();
            }
            else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

})

function runGame(gameType){

}

function checkBtnPressed(){

}

function incrementWin(){
    let prevScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++prevScore;
}

function incrementLose(){
    let prevScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++prevScore;
}

function incrementDraw(){
    let prevScore = parseInt(document.getElementById("draw").innerText);
    document.getElementById("draw").innerText = ++prevScore;
}