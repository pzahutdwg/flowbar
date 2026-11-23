import { arrows } from "./main.js"
import type Shape from "./shapes/shape.js"

export default class Arrow {
    x1: number
    y1: number
    x2: number
    y2: number

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2

        arrows.push(this)
    }

    outOf(shape: Shape, side: Side) {
        switch (side) {
            case 'left':
                this.x1 = shape.x
                this.y1 = shape.y + shape.h / 2
                break
            case 'right':
                this.x1 = shape.x + shape.w
                this.y1 = shape.y + shape.h / 2
                break
            case 'top':
                this.x1 = shape.x + shape.w / 2
                this.y1 = shape.y
                break
            case 'bottom':
                this.x1 = shape.x + shape.w / 2
                this.y1 = shape.y + shape.h
                break
        }
    }

    pointTo(shape: Shape, side: Side) {
        switch (side) {
            case 'left':
                this.x2 = shape.x
                this.y2 = shape.y + shape.h / 2
                break
            case 'right':
                this.x2 = shape.x + shape.w
                this.y2 = shape.y + shape.h / 2
                break
            case 'top':
                this.x2 = shape.x + shape.w / 2
                this.y2 = shape.y
                break
            case 'bottom':
                this.x2 = shape.x + shape.w / 2
                this.y2 = shape.y + shape.h
                break
        }
    }

    update() { }

    draw(ctx: CanvasRenderingContext2D) {
        //! Change later
        ctx.strokeStyle = 'black'
        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.stroke()
    }
}

type Side = 'top' | 'bottom' | 'left' | 'right' // HIP HIP HORAH! HIP HIP HORAH!