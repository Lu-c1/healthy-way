class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "./images/bg.png"
            //this.prize = new Prize();
        this.babyYoda = new BabyYoda()
        this.food = [];
        this.isGameOver = false;
        //this.win = false;
        this.health = 0;
        this.kcal = 0;
        this.scoreKcalorias = 0;
        this.scoreHealth = 0;
    }


    generateFood = () => {

        if (!this.food.length || this.food[this.food.length - 1].y >= canvas.height * 0.3) { //it´s not reading the rest of conditionals because of y. property
            let xPos = Math.floor(Math.random() * canvas.width)
            let foodSuperHealthy = new Food(60, 2, "./images/broccoli.png", xPos);
            this.food.push(foodSuperHealthy)

            let xPos2 = Math.floor(Math.random() * canvas.width)
            let foodHealthy = new Food(180, 1, "./images/eggs.png", xPos2);
            this.food.push(foodHealthy);

            let xPos3 = Math.floor(Math.random() * canvas.width)
            let foodUnHealthy = new Food(300, -1, "./images/bacon.png", xPos3);
            this.food.push(foodUnHealthy)

            let xPos4 = Math.floor(Math.random() * canvas.width)
            let foodAbsuluteUnHealthy = new Food(400, -2, "./images/pizza.png", xPos4);
            this.food.push(foodAbsuluteUnHealthy)
        }
    }

    gameOver = () => {
        console.log("Game lost")
        canvas.style.display = "none"
        gameoverScreen.style.display = "flex"
    }

    winGame = () => {
        console.log("game won")
        playAgainButton = document.querySelector("#restart-btn")
        console.log(playAgainButton)
        canvas.style.display = "none"
        winScreen.style.display = "flex"
        playAgainButton.addEventListener("click", () => {
            console.log(playAgainButton)
            console.log("click")
            winScreen.style.display = "none";
            gameoverScreen.style.display = "none";
            canvas.style.display = "block";
            game = new Game()
            game.gameLoop()
        })
    }

    gameLoop = () => {
        // console.log("game running")
        //clear
        ctx.clearRect(0, 0, canvas.width, canvas.height)
            //Move elements or other actions. Any function in loop is someth
        this.generateFood()
        this.food.forEach(eachfood => {
            eachfood.foodGravity()
        })

        this.food.forEach((eachfood, index) => {

            if (this.babyYoda.foodYodaCollision(eachfood)) {

                this.food.splice(index, 1);
                this.scoreKcalorias += eachfood.kcal;
                this.scoreHealth += eachfood.health;

                totalScoreK.innerHTML = ('Kcal: ' + this.scoreKcalorias);
                totalScoreH.innerHTML = ('Health: ' + this.scoreHealth);

            }


        })

        //drawing elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.babyYoda.drawYoda();
        //this.prize.drawPrize();
        this.food.forEach(eachfood => {
            eachfood.drawFood()
        })

        if (this.scoreKcalorias >= 500 && this.scoreHealth >= 5) {

            this.isGameOver = true;
            this.winGame()
        } else if (this.scoreKcalorias >= 500 && this.scoreHealth < 5) {

            this.isGameOver = true;
            this.gameOver()
        }

        console.log(this.isGameOver)

        //request animation
        if (!this.isGameOver)
            requestAnimationFrame(this.gameLoop)
    }
}