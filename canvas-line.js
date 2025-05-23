let ctx;
function init() {
    let canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#00FF00";

    drawTriangle(100, 10, false, false);
    drawTriangle(200, 10, true, false);
    drawTriangle(300, 10, false, true);
    drawTriangle(400, 10, true, true);
}

function drawTriangle(x, y, isClose, isFill) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 80, y);
    ctx.lineTo(x + 80, y + 80);
    ctx.lineTo(x, y + 80);
    if (isClose) {
        ctx.closePath();
    }
    if (isFill) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}