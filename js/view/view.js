"use strict" 

const cells = document.querySelectorAll(".mole-grid")

// function bindCells(){
//     for(let c = 0; c<cells.length; c++){
//         cells[c].addEventListener("click", handleCellClick)
//     }
// }

// function showFiches(){
//     for(let c = 0; c<cells.length; c++){
//         cells[c].innerHTML=fiches[c]
//     }
// }

function showMole(id){
    let cell=document.getElementById(id);
    const img=document.createElement("img");
    img.src='img/mol 2.webp';

    cell.appendChild(img);
}

function hideMole(id){
     const img=document.getElementsByTagName("img")[0];
     console.log(img);
     img.parentNode.removeChild(img);
}