const express = require('express');
const router = express.Router();
const axios = require('axios');
const Card = require('./models/card'); 


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
          token: process.env.TRELLO_API_SECRET,
          idList: '647cfb2e9a4bdf9e76af3965'
        },
      }
    );

    const createdCard = createCardResponse.data;

    // Store the card data in MongoDB
    const card = new Card({
      name: createdCard.name,
      description: createdCard.desc,
    });

    await card.save();

    res.json(card);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).send('Error occurred while creating the card.');
  }
});

module.exports = router;
