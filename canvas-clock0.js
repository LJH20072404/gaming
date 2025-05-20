let ctx;
function drawClock() {
    let canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 12; i++) {
        ctx.save();
        let r = (Math.PI / 6) * i;
        ctx.translate(300, 300);
        ctx.rotate(r);

        ctx.beginPath();
        ctx.moveTo(0, -250);
        ctx.lineTo(0, -200);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#000"
        ctx.stroke();

        ctx.restore();
    }

    for (let i = 0; i < 60; i++) {
        if ( i % 5 === 0 ) continue;

        ctx.save();
        let r = (Math.PI / 30) * i;
        ctx.translate(300, 300);
        ctx.rotate(r);

        ctx.beginPath();
        ctx.moveTo(0, -250);
        ctx.lineTo(0, -225);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000"
        ctx.stroke();

        ctx.restore();
    }

    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 1; i <= 12; i++) {
        let angle = (Math.PI / 6) * i;
        let x = 300 + Math.sin(angle) * 170;
        let y = 300 - Math.cos(angle) * 170;
        ctx.fillText(i.toString(), x, y);
    }

    let now = new Date ();
    h = now.getHours () % 12;
    m = now.getMinutes();
    s = now.getSeconds();

    let radH = ((Math.PI * 2) / 12) * h + ((Math.PI * 2) / 12) * (m / 60);
    let radM = ((Math.PI * 2) / 60) * m;
    let radS = ((Math.PI * 2) / 60) * s;

    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate(radH);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(0, -90);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate(radM);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(0, -140);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate(radS);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 40);
    ctx.lineTo(0, -180);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(300, 300, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#333";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300, 300, 10, 0, Math.PI * 2);
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
}

setInterval(drawClock, 1000);

window.onload = drawClock;