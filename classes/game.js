class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "./images/bg.png"
        this.babyYoda = new BabyYoda()
        this.food = [];
        this.isGameOver = false;
        this.health = 0;
        this.kcal = 0;
        this.scoreKcalorias = 0;
        this.scoreHealth = 0;
    }


    generateFood = () => {

        if (!this.food.length || this.food[this.food.length - 1].y >= canvas.height * 0.2) {
            let xPos = Math.floor(Math.random() * canvas.width)
            let yPos = Math.floor(Math.random() * -300)
            let foodSuperHealthy = new Food(60, 2, "./images/broccoli.png", xPos, yPos);
            this.food.push(foodSuperHealthy)

            let xPos2 = Math.floor(Math.random() * canvas.width)
            let yPos2 = Math.floor(Math.random() * -300)
            let foodHealthy = new Food(180, 1, "./images/eggs.png", xPos2, yPos2);
            this.food.push(foodHealthy);

            let xPos3 = Math.floor(Math.random() * canvas.width)
            let yPos3 = Math.floor(Math.random() * -300)
            let foodUnHealthy = new Food(300, -1, "./images/bacon.png", xPos3, yPos3);
            this.food.push(foodUnHealthy)

            let xPos4 = Math.floor(Math.random() * canvas.width)
            let yPos4 = Math.floor(Math.random() * -300)
            let foodAbsoluteUnHealthy = new Food(400, -2, "./images/pizza.png", xPos4, yPos4);
            this.food.push(foodAbsoluteUnHealthy)
        }
    }

    gameOver = () => {

        canvas.style.display = "none"
        gameoverScreen.style.display = "flex"
    }

    winGame = () => {
        canvas.style.display = "none"
        winScreen.style.display = "flex"

    }

    gameLoop = () => {

        //clear
        ctx.clearRect(0, 0, canvas.width, canvas.height)
            //Move elements or other actions. Any function in loop is someth
        this.generateFood()
        this.food.forEach(eachfood => {
            eachfood.foodGravity()
        })

        this.food.forEach((eachfood, index) => {

            if (this.babyYoda.foodYodaCollision(eachfood)) {
                this.food.speed += 10;
                this.food.splice(index, 1);
                this.scoreKcalorias += eachfood.kcal;
                this.scoreHealth += eachfood.health;


                totalScoreK.innerHTML = ('Kcal: ' + this.scoreKcalorias);
                totalScoreH.innerHTML = ('Health: ' + this.scoreHealth);

                if (eachfood.health < 0) {

                    this.babyYoda.width += 3;
                    this.babyYoda.speed -= 3;
                } else if (eachfood.health > 0) {

                    this.babyYoda.speed += 50;
                    this.babyYoda.width -= 0.5;
                    this.babyYoda.height += 0.5;
                }
            }


        })

        //drawing elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.babyYoda.drawYoda();
        //this.prize.drawPrize();
        this.food.forEach(eachfood => {
            eachfood.drawFood()
        })

        if (this.scoreKcalorias >= 1500 && this.scoreHealth >= 15) {

            this.isGameOver = true;
            this.winGame()
        } else if (this.scoreKcalorias >= 1500 && this.scoreHealth < 15) {

            this.isGameOver = true;
            this.gameOver()
        }



        //request animation
        if (!this.isGameOver)
            requestAnimationFrame(this.gameLoop)
    }
}