"use strict" 

let moleId;
let myTimer;
let gameTimer;
let counter=30;
let gameActive=false;
let score=0;
// function handleCellClick(event){
//     console.log(event.target.id)

//     if(isFicheAllowed(event.target.id)){
//         setFiche(event.target.id, "X")

//         showFiches()
//         changeActiveSymbol()
//     } else{
//         console.log("Fiche not allowed at: " + event.target.id);
//     }
// console.log(fiches)
    
// }


function handleShowMole(){
    if(gameActive) {
         moleId=Math.floor(Math.random()*9);
        console.log("show mol");
        console.log(moleId);
        showMole(moleId);
        myTimer=setTimeout(function(){handleHideMole()},2000);
    }
   
}

function handleHideMole(){
    if(gameActive) {
       hideMole(moleId);
        myTimer=setTimeout(function(){handleShowMole()},2000); 
    }
    

}

/*function speltimer(){
    gameTimer=setTimeout(function(){speltimer(), alert("game over")},60000)
}*/

function speltimer() {
    if (counter==0) {
        gameActive=false;
        clearInterval(gameTimer);
    }
    document.getElementById('clock').innerHTML=counter;
    counter--;
}
function hitMol(){
    score++
    document.getElementById('puntenTeller').textContent = "scrore: " + score
}






