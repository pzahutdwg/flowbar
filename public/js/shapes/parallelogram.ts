import Shape from "./shape.js";

export default class Parallelogram extends Shape {
    type = 'Parallelogram'

    constructor(x: number, y: number, w: number, h: number, text: string) {
        super(x, y, w, h, text)
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = 'black'

        const slantWidth = this.w / 8 // How wide the slanted edge is
        ctx.beginPath()
        ctx.moveTo(this.x - slantWidth / 2, this.y + this.h)
        ctx.lineTo(this.x + slantWidth / 2, this.y)
        ctx.lineTo(this.x + this.w + slantWidth / 2, this.y)
        ctx.lineTo(this.x + this.w - slantWidth / 2, this.y + this.h)
        ctx.lineTo(this.x - slantWidth / 2, this.y + this.h)
        ctx.stroke()

        this.fillText(ctx)
    }
}