"use strict" 

let moleId;
let myTimer;

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
    moleId=Math.floor(Math.random()*9);
    console.log("show mol");
    console.log(moleId);
    showMole(moleId);
    myTimer=setTimeout(function(){handleHideMole()},2000);
}

function handleHideMole(){
    hideMole(moleId);
    myTimer=setTimeout(function(){handleShowMole()},2000);

}