const express = require('express');
const router = express.Router();
const transactions = require('../models/transaction');

// Get all transactions
router.get('/', (req, res) => {
  res.status(200).json(transactions);
});

// Get a transaction by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const transactionIndex = transactions.findIndex(
    (transaction) => transaction.id === Number(id)
  );
  if (transactionIndex !== -1) {
    res.status(200).send(transactions[transactionIndex]);
  } else {
    res.status(404).json({ error: `Workout with id ${id} not found.` });
  }
});

// Add a transaction
router.post('/', (req, res) => {
  const transaction = { id: transactions.length + 1, ...req.body };
  transactions.push(transaction);
  res.status(201).send(transaction);
});

// Delete a transaction
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const transactionIndex = transactions.findIndex(
    (transaction) => transaction.id === Number(id)
  );
  if (transactionIndex !== -1) {
    transactions.splice(transactionIndex, 1);
    res.status(200).send(transactions)
  }
});

module.exports = router;