// let team1Points = document.getElementById("team1Points");
// let team2Points = document.getElementById("team2Points");

// console.log(team1Points.innerText)
// console.log(typeof team1Points.innerText);

// function initializationPoints(){
//     team1Points.innerText = "0";
//     team2Points.innerText = "0";
// }

// function team1Add() {
//     let points = team1Points.innerText;
//     points = Number(points) + 1;
//     team1Points.innerText = points;
// }

// function team1Sub() {
//     let points = team1Points.innerText;
//     points = Number(points) - 1;
//     team1Points.innerText = points;
// }

// function team2Add() {
//     let points = team2Points.innerText;
//     points = Number(points) + 1;
//     team2Points.innerText = points;
// }

// function team2Sub() {

//     let points = team2Points.innerText;
//     if(points !== "0") {
//         points = Number(points) - 1;
//         team2Points.innerText = points;
//     }else {
//         alert("Can not go lower than 0")
//     }
// }

// initializationPoints();

/*
see if you can create a new function: function calculatePoints
takes 2 parameters teamName and points..
inside the function you need to be able to add or subtract points to the correct team
7:24
So 1 function to handle all adding and subtracting
for either team
*/

let team1Points = document.getElementById("team1Points");
let team2Points = document.getElementById("team2Points");

console.log(team1Points.innerText)
console.log(typeof team1Points.innerText);

function initializationPoints(){
    team1Points.innerText = "0";
    team2Points.innerText = "0";
}

function team1Add() {
    let points = team1Points.innerText;
    points = Number(points) + 1;
    team1Points.innerText = points;
}

function team1Sub() {
    let points = team1Points.innerText;
    points = Number(points) - 1;
    team1Points.innerText = points;
}

function team2Add() {
    let points = team2Points.innerText;
    points = Number(points) + 1;
    team2Points.innerText = points;
}

function team2Sub() {

    let points = team2Points.innerText;
    if(points !== "0") {
        points = Number(points) - 1;
        team2Points.innerText = points;
    }else {
        alert("Can not go lower than 0")
    }
}

initializationPoints();

function calculatePoints(teamName, points){
    
}

