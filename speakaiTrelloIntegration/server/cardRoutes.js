const express = require('express');
const router = express.Router();
const axios = require('axios');
const Card = require('./models/card'); 


//Card get route to retieve the data
router.get('/cards', async (req, res) => {
  const { token } = req.query;
  console.log("----------",token);

   // Make a GET request to Trello API to validate the token
   try{
   const response = await axios.get(`http://api.trello.com/1/members/me?key=${process.env.TRELLO_API_KEY}&token=${token}`);
   if (response.status === 200) {
    try {
       const cards = await Card.find();
       console.log(cards);
       res.json(cards);
     } catch (error) {
       console.error('Error retrieving cards:', error);
       res.status(500).json({ error: 'Failed to retrieve cards' });}
     }
     else
     {
       res.json([{}]);
       res.status(401).send('Invalid token');
     } 
  }
   catch(error)
   {
    res.status(401).send('Invalid token');
   }
   


 
});



// Card post route and here name is title 
router.post('/cards', async (req, res) => {
  const { name, description } = req.body;

  try {
    // Create the card in Trello using the Trello API
    const createCardResponse = await axios.post(
      `${process.env.TRELLO_API_BASE_URL}/cards`,
      null,
      {
        params: {
          name,
          desc: description,         
          key: process.env.TRELLO_API_KEY,
          token: 'process.env.TRELLO_API_SECRET',
          idList: '647cfb2e9a4bdf9e76af3965'
        },
      }
    );

    const createdCard = createCardResponse.data;

    // Store the card data in MongoDB
    const card = new Card({
      name: createdCard.name,
      description: createdCard.desc,
      creationDate: new Date()
    });
    console.log(new Date());
    await card.save();

    res.json(card);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).send('Error occurred while creating the card.');
  }
});

module.exports = router;
