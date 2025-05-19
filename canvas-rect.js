let ctx;
function init() {
    let canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect (10, 10, 400, 400);
    ctx.fillStyle = "#00FF00";
    ctx.fillRect (10, 10, 400, 400);
    ctx.clearRect (30, 30, 360, 360);
}