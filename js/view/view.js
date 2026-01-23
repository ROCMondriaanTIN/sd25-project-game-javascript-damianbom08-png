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

let score = 0;

function showMole(id) {
    let cell = document.getElementById(id);
    const img = document.createElement("img");
    img.src = 'img/mol 2.webp';

    img.addEventListener("click", function () {
        score++;
        document.getElementById("score").innerText = score;

        cell.removeChild(img);
    });

    cell.appendChild(img);
}

function hideMole(id) {
    let cell = document.getElementById(id);
    const img = cell.querySelector("img");
    if (img) {
        cell.removeChild(img);
    }
}