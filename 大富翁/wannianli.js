const yearSel = document.getElementById("year");
const monthSel = document.getElementById("month");
const calendarDiv = document.getElementById("calendar");

for (let y = 1900; y <= 3000; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y + "年";
    yearSel.appendChild(opt);
}

for (let m = 1; m <= 12; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m + "月";
    monthSel.appendChild(opt);
}

function generateCalendar(year, month) {
    const date = new Date(year, month - 1, 1);
    const firstDay = date.getDay();
    const days = new Date(year, month, 0).getDate();
    let html = "<table border='1'><tr>";
    const week = ["日","月","火","水","木","金","土"];
    week.forEach(d => html += `<th>${d}</th>`);
    html += "</tr><tr>";

    for (let i = 0; i < firstDay; i++) html += "<td></td>";
    for (let d = 1; d <= days; d++) {
        if ((firstDay + d - 1) % 7 === 0 && d !== 1) html += "</tr><tr>";
        html += `<td>${d}</td>`;
    }
    html += "</tr></table>";
    calendarDiv.innerHTML = html;
}

const now = new Date();
yearSel.value = now.getFullYear();
monthSel.value = now.getMonth() + 1;
generateCalendar(now.getFullYear(),now.getMonth() + 1);

yearSel.onchange = monthSel.onchange = () => {
    generateCalendar(+yearSel.value, +monthSel.value);
};