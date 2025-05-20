let ctx;
const unit = 50;

window.onload = function () {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";

    drawField();
    drawCenterLine();
    drawCenterCircle();
    drawPenaltyArea("left");
    drawPenaltyArea("right");
    drawGoalBox("left");
    drawGoalBox("right");
    drawPenaltyArc("left");
    drawPenaltyArc("right");
};

// ⚽ 足球场外框
function drawField() {
    ctx.strokeRect(0, 0, 20 * unit, 10 * unit);
}

// ⚽ 中线
function drawCenterLine() {
    ctx.beginPath();
    ctx.moveTo(10 * unit, 0);
    ctx.lineTo(10 * unit, 10 * unit);
    ctx.stroke();
}

// ⚽ 中圈
function drawCenterCircle() {
    ctx.beginPath();
    ctx.arc(10 * unit, 5 * unit, 2 * unit, 0, 2 * Math.PI);
    ctx.stroke();
}

// ⚽ 禁区（大矩形）
function drawPenaltyArea(side) {
    const x = (side === "left") ? 0 : 20 * unit;
    const dir = (side === "left") ? 1 : -1;

    ctx.beginPath();
    ctx.moveTo(x, 3 * unit);
    ctx.lineTo(x + dir * 2 * unit, 3 * unit);
    ctx.lineTo(x + dir * 2 * unit, 7 * unit);
    ctx.lineTo(x, 7 * unit);
    ctx.stroke();
}

// ⚽ 小禁区（小矩形）
function drawGoalBox(side) {
    const x = (side === "left") ? 0 : 20 * unit;
    const dir = (side === "left") ? 1 : -1;

    ctx.beginPath();
    ctx.moveTo(x, 4 * unit);
    ctx.lineTo(x + dir * 1 * unit, 4 * unit);
    ctx.lineTo(x + dir * 1 * unit, 6 * unit);
    ctx.lineTo(x, 6 * unit);
    ctx.stroke();
}

// ⚽ 罚球弧（半圆）
function drawPenaltyArc(side) {
    const cx = (side === "left") ? 2 * unit : 18 * unit;
    const start = (side === "left") ? 1.5 * Math.PI : 0.5 * Math.PI;
    const end = (side === "left") ? 0.5 * Math.PI : 1.5 * Math.PI;

    ctx.beginPath();
    ctx.arc(cx, 5 * unit, 1 * unit, start, end, false);
    ctx.stroke();
}