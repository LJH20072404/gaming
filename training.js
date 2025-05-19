window.onload = function () {
    document.getElementById("setNum").onchange = setNum;
};

function setNum(e) {
    let num = parseInt(e.target.value);
    let v0 = num;
    let v1 = 0.5 * num;
    let v2 = 100 * num;
    document.getElementById("i0").textContent = v0;
    document.getElementById("i1").textContent = v1;
    document.getElementById("i2").textContent = v2;
    document.getElementById("num").textContent = num;
}

