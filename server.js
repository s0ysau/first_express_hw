// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)


// Mount routes
// ==== Greeting Express ==== //
app.get('/greeting', (req, res) => {
    res.send('<h1>Hello strangers</h1>');
});

app.get('/:name' , (req, res) => {
    const name = req.params.name
    res.send(`<h1>What\'s up, ${name}</h1>`)
})
// ==== Greeting Express ==== //
// ==== Tip Calculator Express ==== //
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const tipTotal = parseInt(req.params.total) * (parseInt(req.params.tipPercentage))/100
    res.send(`The amount is \$ ${tipTotal}`)
})

// ==== Tip Calculator Express ==== //
// ==== Magic 8 ball Express ==== //

app.get('/magic/:question', (req, res) => {
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    res.send(`<h1>${responses[Math.floor(Math.random() * 20)]}</h1>`)
})


// ==== Magic 8 ball Express ==== //
// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});