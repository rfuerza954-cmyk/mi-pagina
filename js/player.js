class Player {
    constructor() {
        this.x = 50;
        this.y = 300;
        this.width = 40;
        this.height = 40;
        this.velX = 0;
        this.velY = 0;
        this.speed = 5;
        this.jumpPower = -15;
        this.onGround = false;
    }

    update(gravity) {
        this.velY += gravity;
        this.x += this.velX;
        this.y += this.velY;

        if (this.y > 360) {
            this.y = 360;
            this.velY = 0;
            this.onGround = true;
        }
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
