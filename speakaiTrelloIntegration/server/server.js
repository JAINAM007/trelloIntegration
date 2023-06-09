//Necessary Packages
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const querystring = require('querystring');
const dotenv = require('dotenv');
const cardRoutes = require('./cardRoutes');
const axios = require('axios');
const url = require('url');


dotenv.config();
const app = express();
const port = 3000; // Change this port number if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Session Middleware
// app.use(session({
//     resave: false,
//     saveUninitialized: true
//   }));


// Routes : Get for testing
app.use('/api', cardRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Redirect the user to Trello's authorization page
app.get('/auth/trello', (req, res) => {
    const params = {
      response_type: 'token',
      key: process.env.TRELLO_API_KEY,
      return_url: process.env.CALLBACK_URL,
    };
  
    const queryString = querystring.stringify(params);
    const authUrl = `https://trello.com/1/authorize?${queryString}`;
  
    res.redirect(authUrl);
  });

//After oauth redirection 
app.get('/auth/trello/callback', (req, res) => {
   
    res.redirect(process.env.CARD_DISPLAY_URL);

  });

// Start the server and console it to check the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Built the coonection with mongodb and console the status
mongoose.connect('mongodb://0.0.0.0:27017/speakAiTrello', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });