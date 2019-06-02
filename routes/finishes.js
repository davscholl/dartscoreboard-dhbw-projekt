var express = require('express');
var router = express.Router();

const finishes2 = require('./finishes2.json');
const finishes3 = require('./finishes3.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});


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

module.exports = router;
