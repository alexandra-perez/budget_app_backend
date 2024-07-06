const express = require('express');
const router = express.Router();
const transactionsJSON = require('../models/transaction');

router.get('/', (req, res) => {
  res.status(200).send(transactionsJSON);
});

module.exports = router;