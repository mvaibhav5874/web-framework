const express = require('express');

const app = express();

const PORT = 3001;

app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello, world!",
    status: "success",
    data:
    {
      id: 1,
      name: "Sample Data",
      description: "This is a static JSON response."
    }
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to the RESTful service!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});