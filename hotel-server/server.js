const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/price", (req, res) => {
    const date = req.query.date;
    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    const result = data.find(item => item.date === date);
    res.json(result || { error:"Not found"});
});

app.post("/update", (req, res) => {
    const { date, price, rooms} = req.body;
    let data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    const index = data.findIndex(item => item.date === date);
    if (index >= 0) {
        data[index] = { date, price, rooms };
    } else {
        data.push({ date, price, rooms });
    }

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    res.json({ status: "ok" });
});

app.get("/", (req, res) => {
    res.send("いらっしゃいませ！");
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});