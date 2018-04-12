
class Character {
    constructor(_x, _y, _h, _w) {
        this.x = _x;
        this.y = _y;
        this.h = _h;
        this.w = _w;
        this.gravity = 1;
        this.vy = 0;
    }

    show(){
        noStroke();
        fill(255);
        rectMode(CENTER)
        rect(this.x, this.y, this.h, this.w);
        this.vy += this.gravity
        this.y += this.vy
        if (this.y >= 500){
            this.y = 500;
        }
    }

    jump(){
        this.vy = -this.gravity*17;
    }

    colide(){
        return true;
    }

    move(vx){
        this.x += vx;
    }

}
