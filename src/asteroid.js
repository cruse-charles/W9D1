import MovingObject from "./moving_object";
import * as Util from "./util.js";


class Asteroid extends MovingObject {
    static RADIUS = 25
    static COLOR = "#ff0000"

    constructor(object) {
        super(vel)
        this.pos = object['pos']
        this.color = COLOR
        this.radius = RADIUS
        this.vel = [Math.random()*2 - 1,Math.random()*2 - 1]
    }
}

export default Asteroid;