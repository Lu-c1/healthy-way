// GLOBAL VARIABLES

//canvas setup

let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

//DOM elements
let splashScreen = document.querySelector("#splash-screen")
let gameoverScreen = document.querySelector("#gameover-screen")
let winScreen = document.querySelector("#win-screen")
let goOnButton = document.querySelector("#start-btn")
let playAgainButton = document.querySelector("#restart-btn")
let scorePannel = document.querySelector("#score")
let totalScoreK = document.querySelector(".kcal")
let totalScoreH = document.querySelector(".health")




//main game global variable
let game;



// ADD EVENT LISTENERS


goOnButton.addEventListener("click", () => {
    canvas.style.display = "block";
    scorePannel.style.display = "block";
    splashScreen.style.display = "none";
    game = new Game()
    game.gameLoop()
})

window.addEventListener("keydown", (event) => {

    switch (event.key) {

        case "ArrowLeft":
            game.babyYoda.moveYodaLeft()
            break;
        case "ArrowRight":
            game.babyYoda.moveYodaRight()
            break;
    }
})

playAgainButton.addEventListener("click", () => {

    if (game.win) {
        winScreen.style.display = "none";


        canvas.style.display = "block";
        game = new Game()
        game.gameLoop()

    }
    if (!game.win) {
        gameoverScreen.style.display = "none";
        canvas.style.display = "block";
        game = new Game()
        game.gameLoop()

    }

})