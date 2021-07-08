class Food {
    constructor() {
        this.x = canvas.width - canvas.width * 0.25;
        this.y = 80;
        this.width = 30;
        this.height = 20;
        this.speed = 1
        this.image = new Image()
        this.image.src = ["../images/rice.png"]
    }
    foodGravity = () => {
        this.y++;
    }
}