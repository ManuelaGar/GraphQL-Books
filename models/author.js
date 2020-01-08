//jshint esversion:6
const mongoose = require('mongoose');

const authorSchema = {
  name: String,
  age: Number
};

module.exports = mongoose.model('Author', authorSchema);
