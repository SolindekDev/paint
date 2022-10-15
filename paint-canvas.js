let brushSize = 1 // Default brush size is 1
let brushColor = "#000000" // Default brush color is white
let defaultBgColor = "#000000" // Default background color is white

let paintCanvas, ctx, mouseDown, started
let brushSizeRange = document.getElementById("brush_size")

function init() {
    paintCanvas = document.getElementById("paint_canvas")
    ctx = paintCanvas.getContext("2d")
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, paintCanvas.width, paintCanvas.height)
}

document.getElementById('reset').onclick = () => {
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, paintCanvas.width, paintCanvas.height)
}

document.addEventListener('mousedown', (mouse) => {
    mouseDown = true
})

document.addEventListener('mouseup', (mouse) => {
    mouseDown = false
    started = false
})

document.addEventListener('mousemove', (mouse) => {
    if (mouse.target.id == "paint_canvas" && mouseDown == true) {
        if (!started) {
            started = true;
            ctx.strokeStyle = brushColor;
            ctx.lineWidth = brushSizeRange.value;

            ctx.beginPath();
            ctx.moveTo(mouse.x - (window.screen.width / 2 - paintCanvas.width / 2), mouse.y - 5);
        } else {
            ctx.lineTo(mouse.x - (window.screen.width / 2 - paintCanvas.width / 2), mouse.y - 5);
            ctx.stroke();
        }
    }
})

document.getElementById("save").onclick = () => {
    let link = document.createElement("a");
    link.setAttribute('download', "paint-image")
    link.href = paintCanvas.toDataURL("image/png")
    link.click()
}

document.addEventListener('DOMContentLoaded', init)

// Colors
document.getElementById('red').onclick = () => brushColor = 'red'
document.getElementById('blue').onclick = () => brushColor = 'blue'
document.getElementById('pink').onclick = () => brushColor = 'pink'
document.getElementById('slateblue').onclick = () => brushColor = 'slateblue'
document.getElementById('seagreen').onclick = () => brushColor = 'seagreen'
document.getElementById('black').onclick = () => brushColor = 'black'
document.getElementById('aqua').onclick = () => brushColor = 'aqua'
document.getElementById('white').onclick = () => brushColor = 'white'
document.getElementById('purple').onclick = () => brushColor = 'purple'
document.getElementById('palegreen').onclick = () => brushColor = 'palegreen'
document.getElementById('brown').onclick = () => brushColor = 'peru'
document.getElementById('antiquewhite').onclick = () => brushColor = 'antiquewhite'
document.getElementById('orange').onclick = () => brushColor = '#ff8800'