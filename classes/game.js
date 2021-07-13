class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "../images/bg.png"
            //this.prize = new Prize();
        this.babyYoda = new BabyYoda()
        this.food = [];
        this.isGameOver = false;
        this.health = 0;
        this.kcal = 0;
    }


    generateFood = () => {

        if (!this.food.length || this.food[this.food.length - 1].y >= canvas.height * 0.3) { //it´s not reading the rest of conditionals because of y. property
            let xPos = Math.floor(Math.random() * canvas.width * 0.70)
            let foodSuperHealthy = new Food(60, 2, "../images/broccoli.png", xPos);
            this.food.push(foodSuperHealthy)

            let xPos2 = Math.floor(Math.random() * canvas.width * 0.70)
            let foodHealthy = new Food(180, 1, "../images/eggs.png", xPos2);
            this.food.push(foodHealthy);

            let xPos3 = Math.floor(Math.random() * canvas.width * 0.70)
            let foodUnHealthy = new Food(300, -1, "../images/bacon.png", xPos3);
            this.food.push(foodUnHealthy)

            let xPos4 = Math.floor(Math.random() * canvas.width * 0.70)
            let foodAbsuluteUnHealthy = new Food(400, -2, "../images/pizza.png", xPos4);
            this.food.push(foodAbsuluteUnHealthy)
        }
    }

    gameOver = () => {
        canvas.style.display = "none"
        gameoverScreen.style.display = "flex"
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

                this.food.splice(index, 1);
                scoreKcalorias += eachfood.kcal;
                scoreHealth += eachfood.health;

                totalScoreK.innerHTML = ('Kcal: ' + scoreKcalorias);
                totalScoreH.innerHTML = ('Health: ' + scoreHealth);

            }
            if (scoreKcalorias > 1500 && scoreHealth < 15) {
                this.isGameOver = true;
                this.gameOver();
            }


        })

        //drawing elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.babyYoda.drawYoda();
        //this.prize.drawPrize();
        this.food.forEach(eachfood => {
            eachfood.drawFood()
        })


        //request animation
        if (!this.isGameOver)
            requestAnimationFrame(this.gameLoop)
    }
}