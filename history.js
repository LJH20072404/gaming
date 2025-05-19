window.onload = init;
function init() {
    let years = document.querySelectorAll("span.year");
    for (let i = 0; i < years.length; i++) {
        let y = years[i];
        y.answer = y.textContent;
        y.textContent = "____";
        y.onclick = function (e) {
            e.target.textContent = e.target.answer;
        };
    }
}