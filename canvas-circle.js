let ctx;
function init() {
    let canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#00FFFF";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.arc(100, 50, 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.arc(200, 50, 30, 0, Math.PI / 3);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.arc(300, 50, 30, 0, Math.PI / 3, true);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 50);
    ctx.arc(400, 50, 30, (-1 * Math.PI) / 6, Math.PI / 6, true);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(500, 50, 30, 0, (2 * Math.PI) / 3);
    ctx.fill();
}