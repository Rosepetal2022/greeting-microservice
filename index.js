const express = require('express');
const app = express();
const port = 3000

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = 'morning';
    } else if (hours < 18) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'evening';
    }

    const greeting = `Good ${timeOfDay}, ${name}!`;
    res.json({ greeting });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
