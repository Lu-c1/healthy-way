class BabyYoda {
    constructor() {
        this.x = canvas.width * 0.40;
        this.y = canvas.height - 80;
        this.speed = 1;
        this.width = 70;
        this.height = 70;
        this.img = new Image()
        this.img.src = "./images/babyyoda.png"

    }
    drawYoda = () => {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    moveYodaRight = () => {
        this.x += 10;
    }
    moveYodaLeft = () => {
        this.x -= 10;
    }

    foodYodaCollision = (food) => {
        return this.x < food.x + food.width &&
            this.x + this.width > food.x &&
            this.y < food.y + food.height &&
            this.height + this.y > food.y

    }
}