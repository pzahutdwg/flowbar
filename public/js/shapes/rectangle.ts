import Shape from "./shape.js";

export default class Rectangle extends Shape {
    type = 'Rectangle'

    constructor(x: number, y: number, w: number, h: number, text: string) {
        super(x, y, w, h, text)
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = 'black'
        ctx.strokeRect(this.x, this.y, this.w, this.h)
        this.fillText(ctx)
    }
}