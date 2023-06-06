//Necessary Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this port number if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes : Get for testing
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and console it to check the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});