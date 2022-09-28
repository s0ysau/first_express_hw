// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)


// Mount routes
app.get('/greeting', (req, res) => {
    res.send('<h1>Hello strangers</h1>');
});

app.get('/:name' , (req, res) => {
    const name = req.params.name
    res.send(`<h1>What\'s up, ${name}</h1>`)
})


// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});