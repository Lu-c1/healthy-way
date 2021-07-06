// GLOBAL VARIABLES

//canvas setup

let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

//DOM elements
let splashScreen = document.querySelector("#splash-screen")
let gameoverScreen = document.querySelector("#gameover-screen")
let goOnButton = document.querySelector("#start-btn")
let restartButton = document.querySelector("#restart-btn")

//main game global variable
let game;

// ADD EVENT LISTENERS


goOnButton.addEventListener("click", () => {
    canvas.style.display = "block";
    splashScreen.style.display = "none"

    // next thing I have to do after push start bottom is create the game. If not I cannot start the game
    //create gane based on the gameLoop we´ve did
    gameObj = new Game() // game is the obect we create and will have all properties and methods of Game class!
        //start game , so what we want is to execute de gameLoop method
    gameObj.gameLoop() //invoke the method

}) canvas.addEventListener("click", () => {
    // how I access the method which is in the bird, to the game?
    gameObj.bird.birdJump() //target is gameObj, that is an objet of game class with all the properties of the class and inside is bird class with all the properties and methods.

}) restartButton.addEventListener("click", () => {
    canvas.style.display = "block";
    gameoverScreen.style.display = "none" //copy the same of above but changing splashScreen by gameOverScreen
    gameObj = new Game();
    gameObj.gameLoop();
})