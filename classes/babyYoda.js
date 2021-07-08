class BabyYoda {
    constructor() {
        this.x = canvas.width * 0.70;
        this.y = canvas.height - 50;
        this.speed = 1;
        this.width = 30;
        this.height = 30;
        this.img = new Image()
        this.img.src = ".. / images / babyyoda.png"

    }
    drawYoda = () => {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    moveYodaRight = () => {
        x++;
    }
    moveYodaLeft = () => {
        this.x--;
    }

}