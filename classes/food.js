class Food {
    constructor(kcal, health, srcURL, xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.width = 40;
        this.height = 30;
        this.speed = 1.4;
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