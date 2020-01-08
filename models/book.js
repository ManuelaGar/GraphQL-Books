//jshint esversion:6
const mongoose = require('mongoose');

const bookSchema = {
  name: String,
  genre: String,
  authorId: String
};

module.exports = mongoose.model('Book', bookSchema);
