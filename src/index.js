console.log("weback is working")

import MovingObject from "./moving_object.js"
import Asteroid from "./asteroid.js"
window.MovingObject = MovingObject

const canvas = document.getElementById('game-canvas')
const ctx = canvas.getContext('2d')
window.ctx = ctx

const mu = new MovingObject({
    pos: [50, 50],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

mu.draw(ctx)
mu.move()
mu.draw(ctx)
mu.move()
mu.draw(ctx)
mu.move()
mu.draw(ctx)
mu.move()


const mv = new MovingObject({
    pos: [130, 130],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});


mv.draw(ctx)
mv.move()
mv.draw(ctx)
mv.move()
mv.draw(ctx)
mv.move()
mv.draw(ctx)
mv.move()