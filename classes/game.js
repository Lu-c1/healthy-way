class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "../images/background.png"
        this.babyYoda = new BabyYoda()
        this.food = [];
        this.isGameOn = true;
    }
    generateFood = () => {

        if (!this.food.length || this.food[this.food.length - 1].y === canvas.height * 0.03) { //it´s not reading the rest of conditionals because of y. property
            let xPos = Math.floor(Math.random() * canvas.height / 3)
            let foodSuperHealthy = new Food(60, 2, "../images/broccoli.png", xPos);
            this.food.push(foodSuperHealthy)

            let xPos2 = xPos + 200
            let foodHealthy = new Food(180, 1, "../images/eggs.png", xPos2);
            this.food.push(foodHealthy)
            console.log(this.food);

            let xPos3 = xPos + 300
            let foodUnHealthy = new Food(300, -1, "../images/bacon.png", xPos3);
            this.food.push(foodUnHealthy)

            let xPos4 = xPos + 500
            let foodAbsuluteUnHealthy = new Food(400, -2, "../images/pizza.png", xPos4);
            this.food.push(foodAbsuluteUnHealthy)
        }

    }



    gameLoop = () => {
        console.log("game is running")
            //clear
        ctx.clearRect(0, 0, canvas.width, canvas.height)
            //Move elements or other actions. Any function in loop is someth
        this.generateFood()
        this.food.forEach(eachfood => {
            eachfood.foodGravity()
        })
        this.food.forEach(eachfood => {
                if (this.babyYoda.foodYodaCollision(eachfood)) {
                    // I want to sum kcal of eachfood tha has to be <= to 1200
                    //I want to sum points of health that will appear in the prize element
                    //if kcal > 1200 || health<0 game over 
                    //price will have some sound with +5 point of health
                }
            })
            //drawing elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.babyYoda.drawYoda();
        this.food.forEach(eachfood => {
                eachfood.drawFood()
            })
            //request animation
        requestAnimationFrame(this.gameLoop)
    }
}