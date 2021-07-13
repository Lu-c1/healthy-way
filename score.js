class score {
    constructor() {

        this.x = 1300;
        this.y = 400;
        this.width = 40;
        this.height = 80;
        this.img = new Image()
            //¿how draw a rectangle with letters kcal an

    }
    drawScore = () => {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    score = () => {
        this.food.forEach(eachfood => {

            if (this.food.Kcal <= 1200) {

                let sum = 0;
                sum += this.food.kcal
                sum += this.food.health

                //if kcal reach 1200 with more than 50 points of health it shoud be "you win!!"
            }
            if (this.food.health * 5) {
                //addEventListener to sound (with +5 points of health) an move the price figure
            }

        })
    }
}