class Prize {
    constructor() {
        this.x = 850;
        this.y = 600;
        this.width = 90;
        this.height = 60;
        this.img = new Image()
        this.img.src = "../images/prize.png"
    }
    drawPrize = () => {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

}