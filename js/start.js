"use strict" 

window.onload=start;

function start (){
    // bindCells();
    gameActive=true; 
    handleShowMole();
    speltimer()
    gameTimer=setInterval(speltimer,1000);
}

function klikMol(){
    moleId = addEventListener("click", handleHideMole)
    
};
klikMol()



