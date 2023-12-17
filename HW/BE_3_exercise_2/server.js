const express = require('express');
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });
  
  app.get('/details', (req, res) => {
    res.send('Details page');
  });
  
  app.get('/contact', (req, res) => {
    res.send('Contact page');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});