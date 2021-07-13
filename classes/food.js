class Food {
    constructor(kcal, health, srcURL, xPos) {
        this.x = xPos;
        this.y = 0;
        this.width = 35;
        this.height = 25;
        this.speed = 1.3;
        this.image = new Image();
        this.image.src = srcURL;
        this.kcal = kcal;
        this.health = health;
    }
    drawFood = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

    }
    foodGravity = () => {
        this.y += this.speed
    }

}