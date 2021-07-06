// GLOBAL VARIABLES

//canvas setup

let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

//DOM elements
let splashScreen = document.querySelector("#splash-screen")
let gameoverScreen = document.querySelector("#gameover-screen")
let goOnButton = document.querySelector("#start-btn")
let playAgainButton = document.querySelector("#restart-btn")

//main game global variable
let game;

// ADD EVENT LISTENERS


goOnButton.addEventListener("click", () => {
    canvas.style.display = "block";
    splashScreen.style.display = "none";
})