var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
var User = require('./user.js');
const connectionString = 'mongodb+srv://admin:DHBWDart2019!@dartscoreboarddb-p4g37.mongodb.net/test?retryWrites=true&w=majority';
const connector = mongoose.connect(connectionString);
var jwt = require('jwt-simple');

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
router.post('/login', async (req, res) =>{
  let userData = req.body;
  let user = await User.findOne({email: userData.email});

  if(!user){
    res.status(401).send({message: 'Email or Password invalid'})
  }

  if(userData.password != user.password){
    res.status(401).send({message: 'Email or Password invalid'})
  }

  let payload = {}
  let token = jwt.encode(payload, '123456')

  res.status(200).send({token})
});

router.post('/register', (req, res) =>{
  let userData = req.body;
  console.log(userData);

  let user = new User(userData);

  user.save((err, result) => {
    if(err){
      console.log("User konnte nicht angelegt werden");
    } else {
      res.sendStatus(200);
    }
  })
});


module.exports = router;
