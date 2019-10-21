class Player {
    constructor(src, x, y, w, h, xSpeed, ySpeed) {
        this.src = src;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    move() {
        if (leftKeyPressed && this.x > 0) {
            this.x -= this.xSpeed;
        }
        if (rightKeyPressed && this.x < canvas.width - this.w) {
            this.x += this.xSpeed;
        }
        if (upKeyPressed && this.y > 0) {
            this.y -= this.ySpeed;
        }
        if (downKeyPressed && this.y < canvas.height - this.h) {
            this.y += this.ySpeed;
        }

    }

    startPos() {
        this.x = canvas.width / 2 - this.w / 2;
        this.y = canvas.height - this.h * 2;
        startingPos = false;
    }

    draw() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h)
    }

}
