const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

router.get('/details', (req, res) => {
  res.send('Details page');
});

router.get('/contact', (req, res) => {
  res.send('Contact page');
});

module.exports = router;