class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "../images/background.png"
        this.babyYoda = new BabyYoda()
        this.food = [];
        this.isGameOn = true;
    }

    gameLoop = () => {
        console.log("game is running")
            //clear
        ctx.clearRect(0, 0, canvas.width, canvas.height)
            //Move elements or other actions
        this.babyYoda.moveYoda()
            //drawing elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, cavas.height)
        this.babyYoda.drawYoda()
            ////request animation
        requestAnimationFrame(this.gameLoop)
    }

}