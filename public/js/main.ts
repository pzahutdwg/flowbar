import Arrow from "./arrow.js"
import pickRandom from "./inputs.js"
import Diamond from "./shapes/diamond.js"
import Parallelogram from "./shapes/parallelogram.js"
import Rectangle from "./shapes/rectangle.js"
import type Shape from "./shapes/shape.js"

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

window.addEventListener('resize', (e) => {
    resizeCanvas()
})

resizeCanvas()

export const shapes: Shape[] = []
export const arrows: Arrow[] = []

let r = new Rectangle(0, 0, 500, 250, pickRandom('rectangle'))
let d = new Diamond(600, 0, 500, 500, pickRandom('diamond'))
let p = new Parallelogram(50, 600, 500, 250, pickRandom('parallelogram'))

let arrow = new Arrow(0, 0, 0, 0)
arrow.outOf(r, 'bottom')
arrow.pointTo(p, 'top')

let arrow2 = new Arrow(0, 0, 0, 0)
arrow2.outOf(p, 'right')
arrow2.pointTo(d, 'bottom')

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    /*
    :::    ::: :::::::::  :::::::::      ::: ::::::::::: ::::::::::
    :+:    :+: :+:    :+: :+:    :+:   :+: :+:   :+:     :+:
    +:+    +:+ +:+    +:+ +:+    +:+  +:+   +:+  +:+     +:+
    +#+    +:+ +#++:++#+  +#+    +:+ +#++:++#++: +#+     +#++:++#
    +#+    +#+ +#+        +#+    +#+ +#+     +#+ +#+     +#+
    #+#    #+# #+#        #+#    #+# #+#     #+# #+#     #+#
     ########  ###        #########  ###     ### ###     ##########
    */

    for (let shape of shapes) shape.update()
    for (let arrow of arrows) arrow.update()

    /*
    :::::::::  :::::::::      :::     :::       :::
    :+:    :+: :+:    :+:   :+: :+:   :+:       :+:
    +:+    +:+ +:+    +:+  +:+   +:+  +:+       +:+
    +#+    +:+ +#++:++#:  +#++:++#++: +#+  +:+  +#+
    +#+    +#+ +#+    +#+ +#+     +#+ +#+ +#+#+ +#+
    #+#    #+# #+#    #+# #+#     #+#  #+#+# #+#+#
    #########  ###    ### ###     ###   ###   ###
    */

    for (let shape of shapes) {
        // shape.drawBorder(ctx)
        shape.draw(ctx)
    }

    for (let arrow of arrows) {
        arrow.draw(ctx)
    }

    requestAnimationFrame(main)
}

main()