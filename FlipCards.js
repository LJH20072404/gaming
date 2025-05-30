"use strict"

Array.prototype.shuffle = function () {
    let i = this.length;
    while (i) {
        let j = Math.floor(Math.random() * i);
        let t = this[--i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
}

let timer = NaN;
let flipTimer = NaN;
let score = 0;
let prevCard = null;
let startTime = null;

function init() {
    let table = document.getElementById("table");

    let cards = [];
    for (let i = 1; i <= 24; i++) {
        cards.push(i);
        cards.push(i);
    }
    cards.shuffle();
    for (let i = 0; i < 6; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td");
            td.className = "card back";
            td.number = cards[i * 8 + j];
            td.onclick = flip;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

}

function tick() {
    let now = new Date();
    let elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
    document.getElementById("time").textContent = elapsed;
}

function flip(e) {
    let src = e.target;

    if (!startTime) {
        startTime = new Date();
        timer = setInterval(tick, 1000);
    }

    if (flipTimer || src.textContent != "") {
        return;
    }

    let num = src.number;
    src.className = "card";
    src.textContent = num;

    if (prevCard == null) {
        prevCard = src;
        return;
    }

    if (prevCard.number == num) {
        if (++score == 24) {
            clearInterval(timer);
        }
        prevCard = null;
        clearTimeout(flipTimer);
    } else {
        flipTimer = setTimeout(function () {
            src.className = "card back";
            src.textContent = "";
            prevCard.className = "card back";
            prevCard.textContent = "";
            prevCard = null;
            flipTimer = NaN;
        }, 1000);
    }
}