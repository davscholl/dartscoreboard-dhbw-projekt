const mongoose = require('mongoose')

module.exports = new mongoose.model('User', {
  username: String,
  email: String,
  password: String,
  average: Number,
  numberOfThrows: Number,
  numberOfGames: Number
});
