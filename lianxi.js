function addToCart () {
    const qty = document.getElementById("quantity").value;
    const pricePerItem = document.getElementById("price").value;
    const tax = 0.1;

    const date = new Date();
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();

    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 5);
    const isTenthDay = (dayOfMonth % 10 === 0);

    let discount = 1;
    let discountLabel = "";

    if (isWeekend && isTenthDay) {
        discount = 0.7;
        discountLabel = "(超特割引)";
    } else if (isWeekend) {
        discount = 0.8;
        discountLabel = "(週末割引)";
    } else if (isTenthDay) {
        discount = 0.9;
        discountLabel = "(十の日)";
    }

    const total = Math.round(qty * pricePerItem * discount * (1 + tax));

    document.getElementById("totalPrice").textContent = `合計金額：${total}円${discountLabel}`;
}