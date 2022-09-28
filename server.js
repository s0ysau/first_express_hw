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


// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});