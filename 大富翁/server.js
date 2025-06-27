const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    if (parsedUrl.pathname === '/price') {
        const date = query.date;

        const weekday = new Date(date).getDay();
        let basePrice = 10000;
        let price = basePrice;
        let availableRooms = 5;

        if (weekday === 5 || weekday === 6) {
            price = basePrice * 1.2;
        }
        if (['2025-05-01', '2025-10-01', '2025-12-31'].includes(date)) {
            price = basePrice * 1.8;
        }

        if (date === '2025-08-15') availableRooms = 0;

        res.end(JSON.stringify({
            date,
            price: Math.round(price),
            rooms: availableRooms
        }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not found"}));
    }
});
server.listen(3000, () => {
    console.log("📡 Server ready at http://localhost:3000");
});