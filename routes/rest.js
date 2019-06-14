var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
var User = require('./user.js');
const connectionString = 'mongodb+srv://admin:DHBWDart2019!@dartscoreboarddb-p4g37.mongodb.net/test?retryWrites=true&w=majority';
const connector = mongoose.connect(connectionString, { useNewUrlParser: true });
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

//params: _id
router.get('/users/:id', async (req, res) =>{
  try{
  let users = await User.findOne({_id: req.params.id}, '-password -__v');
  res.send(users);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
})

//param: alles möglich außer _id
router.put('/update/:id', async (req, res) =>{
  User.findByIdAndUpdate({_id: req.params.id}, req.body, (err, user) => {
      if (err){
        return res.status(500).send(err);
      }
      return res.send(user._id);
    });
  }
);

//params: email, password
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
  //let token = jwt.encode(payload, '123456')

  res.send(user._id);
});

//params: username, email, password
router.post('/register', (req, res) =>{
  let userData = req.body;

  userData["average"] = 0;
  userData["averageDouble"] = 0;
  userData["throws"] = 0;
  userData["throwsDouble"] = 0;
  userData["finishedGames"] = 0;

  let user = new User(userData);

  user.save((err, result) => {
    if(err){
      console.log("User konnte nicht angelegt werden");
      res.sendStatus(403);
    } else {
      res.status(200).send({message: 'OK'});
    }
  })
});

//router.post


module.exports = router;
