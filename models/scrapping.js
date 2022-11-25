const mongoose = require('mongoose');

const ScrappingSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true
  },
  Calories: {
    type: String,
    required: true
  },
  Fat: {
    type: String,
    required: true
  },
  Carbs: {
    type: String,
    required: true
  },
  Protein: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Scrapping = mongoose.model('Scrapping', ScrappingSchema);

module.exports = Scrapping;
