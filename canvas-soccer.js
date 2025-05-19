let ctx;
window.onload = init;
function init() {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";

    const unit = 50;

    ctx.strokeRect(0, 0, 20 * unit, 10 * unit);

    ctx.beginPath();
    ctx.moveTo(10 * unit, 0);
    ctx.lineTo(10 * unit, 10 * unit);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 3 * unit);
    ctx.lineTo(2 * unit, 3 * unit);
    ctx.lineTo(2 * unit, 7 * unit);
    ctx.lineTo(0, 7 * unit);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20 * unit, 3 * unit);
    ctx.lineTo(18 * unit, 3 * unit);
    ctx.lineTo(18 * unit, 7 * unit);
    ctx.lineTo(20 * unit, 7 * unit);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(10 * unit, 5 * unit, 2 * unit, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 4 * unit);
    ctx.lineTo(1 * unit, 4 * unit);
    ctx.lineTo(1 * unit, 6 * unit);
    ctx.lineTo(0, 6 * unit);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(20 * unit, 4 * unit);
    ctx.lineTo(19 * unit, 4 * unit);
    ctx.lineTo(19 * unit, 6 * unit);
    ctx.lineTo(20 * unit, 6 * unit);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(2 * unit, 5 * unit, 1 * unit, 1.5 * Math.PI, Math.PI / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(18 * unit, 5 * unit, 1 * unit, Math.PI / 2, 1.5 * Math.PI);
    ctx.stroke();
}