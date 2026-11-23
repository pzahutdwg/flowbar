import Shape from "./shape.js";

export default class Diamond extends Shape {
    type = 'Diamond'

    constructor(x: number, y: number, w: number, h: number, text: string) {
        super(x, y, w, h, text)
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = 'black'

        ctx.beginPath()
        ctx.moveTo(this.x, this.y + this.h / 2)
        ctx.lineTo(this.x + this.w / 2, this.y)
        ctx.lineTo(this.x + this.w, this.y + this.h / 2)
        ctx.lineTo(this.x + this.w / 2, this.y + this.h)
        ctx.lineTo(this.x, this.y + this.h / 2)
        ctx.stroke()

        this.fillText(ctx)
    }
}