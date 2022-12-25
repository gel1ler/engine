//f - функция описания границ тела

class Body {
    constructor(x, y, v) {
        this.x = x
        this.y = y
        this.v = v
    }

    velocityHandler(delta, duration) {
        this.v += delta
    }

    moving() {
        this.x += this.v.velocity ? this.v.x : 0
        this.y += this.v.velocity ? this.v.y : 0
    }
}

class Ball extends Body {
    constructor(f){

    }
}