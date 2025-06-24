const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");

for (let y =1900; y <= 2100; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y + "年";
    yearSelect.appendChild(opt);
}

for (let m = 1; m <= 12; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m + "月";
    monthSelect.appendChild(opt);
}

const now = new Date();
yearSelect.value = now.getFullYear();
monthSelect.value = now.getMonth() + 1;//为什么加1

fillCalendar(now.getFullYear(), now.getMonth() + 1);

yearSelect.onchange = monthSelect.onchange = () => {
    fillCalendar(+yearSelect.value, +monthSelect.value);
}//这里是什么意思？固定用法吗？

function fillCalendar(year, month) {
    const table = document.getElementById("calendar-table");
    const cells = table.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].className = "";
    }//为什么都设置空的元素名字？是为了什么？

    const date = new Date(year, month - 1, 1);
    const firstDay = date.getDay();
    const days = new Date(year, month, 0).getDate();

    for (let d = 1; d <= days; d++) {
        const cellIndex = firstDay + d - 1;
        if (cellIndex < cells.length) {
            cells[cellIndex].textContent = d;
            cells[cellIndex].className = "day";

            const weekDay = (firstDay + d - 1) % 7;
            if (weekDay === 0) {
                cells[cellIndex].classList.add("sunday");
            } else if (weekDay === 6) {
                cells[cellIndex].classList.add("saturday");
            }//这里的原理是什么？

            const today = new Date();
            if (
                year === today.getFullYear() &&
                month === today.getMonth() + 1 &&
                d === today.getDate()
            ) {
                cells[cellIndex].classList.add("today");
            }
        }
    }

    const week6 = document.querySelector(".week6");
    if (firstDay + days > 35) {
        week6.classList.remove("hidden");
    } else {
        week6.classList.add("hidden");
    }//这里是为了不显示有些月份用不到的第六行
}