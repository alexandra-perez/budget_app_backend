const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const transactionsController = require('./controllers/transactionsController');
app.use('/transactions', transactionsController);

app.get('/', (req, res) => {
  res.send('Welcome to my budgeting app');
});

module.exports = app;
