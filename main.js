const express = require('express');
const app = express();
const port = 3000
const chooseGreeting = require('./utils/pokemon');

console.log(chooseGreeting());

app.get('/pokegreet', (req, res) => {

    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = 'morning';
    } else if (hours < 18) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'evening';
    }

    const greeting = `Good ${timeOfDay}!`;
    const pokeGreeting = chooseGreeting();
    res.json({ greeting, pokeGreeting });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
