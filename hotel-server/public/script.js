function updateData() {
    const date = document.getElementById("date").value;
    const price = Number(document.getElementById("price").value);
    const rooms = Number(document.getElementById("rooms").value);

    fetch("/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, price, rooms })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("msg").textContent = "セーブしました！";
    })
    .catch(() => {
        document.getElementById("msg").textContent = "セーブできません！";
    });
}