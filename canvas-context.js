function init() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#00FF00";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";


    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(180, 250);
    ctx.moveTo(180, 100);
    ctx.lineTo(100, 250);
    ctx.stroke();
    ctx.strokeRect(100, 100, 80, 150);

    ctx.fillRect(300, 100, 100, 150);

    ctx.strokeRect(500, 100, 100, 150);

    ctx.beginPath();
    ctx.arc(750, 175, 75, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.stroke();
}