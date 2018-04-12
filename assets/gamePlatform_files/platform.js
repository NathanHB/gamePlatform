
class Platform {
    constructor(_h, _w) {
        this.x = Math.floor((Math.random() * 1000) + 1);
        this.y = Math.floor((Math.random() * 400) + 1);
        this.h = _h;
        this.w = _w;
    }

    show(){
        noStroke();
        fill(100);
        rect(this.x, this.y, this.h, this.w);
    }
}
