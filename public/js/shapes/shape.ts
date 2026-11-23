import { shapes } from "../main.js"

export default class Shape {
    type: string = 'none'
    text: string

    x: number
    y: number
    w: number
    h: number

    constructor(x: number, y: number, w: number, h: number, text: string) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.text = text

        shapes.push(this)
    }

    update() {
        this.w = Math.max(this.w, 10)
        this.h = Math.max(this.h, 10)
    }

    fillText(ctx: CanvasRenderingContext2D) {
        //! Eventually make it so the lines break
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'black'

        // ctx.font = `${Math.min(this.w, this.h) / 4}px Arial` // Scale font with the shape
        ctx.font = '24px Arial'

        ctx.fillText(this.text, this.x + this.w / 2, this.y + this.h / 2)
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.fillText(ctx)
    }

    drawBorder(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = 'red'
        ctx.strokeRect(this.x, this.y, this.w, this.h)
    }
}