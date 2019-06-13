const mongoose = require('mongoose')

module.exports = new mongoose.model('User', {
  username: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  average: Number,
  averageDouble: Number,
  throws: Number,
  throwsDouble: Number,
  finishedGames: Number
});
