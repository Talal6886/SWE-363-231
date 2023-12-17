const express = require('express');
const app = express();
const port = 3000;

// Middleware to process form submission
const processForm = (req, res, next) => {
  const { name, email, message } = req.body;

  // Perform any desired processing on the form data
  console.log('Form Data:', { name, email, message });

  // Send a confirmation response to the user
  res.send('Form submitted successfully!');
};

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit-form" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>

      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit-form', processForm, (req, res) => {
  // This is the route handler for the form submission
  // Additional logic can be added here if needed
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});