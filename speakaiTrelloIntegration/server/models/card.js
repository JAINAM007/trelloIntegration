const mongoose = require('mongoose');

//replace frontend title to name
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  }
});
const Card = mongoose.model('Card', cardSchema);
module.exports = Card;