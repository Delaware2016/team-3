var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user)console.log("WE HAVE A USER!", req.user[0]);
  console.log(req.user[0]);
  res.render('index', { title: 'Express', user: req.user[0] });
});

module.exports = router;