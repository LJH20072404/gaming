let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.strokeStyle = "#FF0000";
ctx.lineCap = "round";
ctx.lineWidth = 5;

let isDrawing = false;
let prevX = 0;
let prevY = 0;

canvas.onmousedown = function (e) {
    isDrawing = true;

    prevX = e.offsetX;
    prevY = e.offsetY;
};

canvas.onmouseup = function () {
    isDrawing = false;
};

canvas.onmousemove = function (e) {
    if (!isDrawing) return;

    let currX = e.offsetX;
    let currY = e.offsetY;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    prevX = currX;
    prevY = currY;
};

document.getElementById("clearBtn").onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}