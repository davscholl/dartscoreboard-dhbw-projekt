var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const userSchema = require('./userSchema.js')
const User = mongoose.model('user', userSchema, 'user')
const connectionString = 'mongodb+srv://admin:DHBWDart2019!@dartscoreboarddb-p4g37.mongodb.net/test?retryWrites=true&w=majority'
const connector = mongoose.connect(connectionString)

const finishes2 = require('./finishes2.json');
const finishes3 = require('./finishes3.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

//FINISH
router.get('/finish/:type/:score', function(req, res) {

  var {type, score} = req.params;
  console.log(req.params);

  if(type == 3){
    res.json(finishes3[score]);
}
  else if(type == 2){
    res.json(finishes2[score]);
}
});

//USER
async function createUser(username, email, password) {
  return new User({
    username,
    email,
    password
  }).save()
}

async function findUser(username) {
  return await User.findOne({ username })
}

router.post('/users', async function(req, res) {  
  const {username, email, password} = req.body
  console.log(req.body);

  let user = await connector.then(async () => {
    return findUser(username)
  })

  if (!user) {
    user = await createUser(username, email, password)
  }

  console.log(user)
  res.sendStatus(200)
});

module.exports = router;
