const express = require('express');

const app = express();

app.use(express.json());

const transactionsController = require('./controllers/transactionsController');
app.use('/transactions', transactionsController);

app.get('/', (req, res) => {
    res.send('Welcome to my budgeting app')
})

module.exports = app;
