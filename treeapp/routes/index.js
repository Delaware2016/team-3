var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'ec2-54-210-156-211.compute-1.amazonaws.com',
    user : 'cfg',
    password : process.env.PW,
    database : 'cfg'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.user){
    res.redirect('/login');
    return;
  }
  if(req.user)console.log("WE HAVE A USER!", req.user[0]);
  console.log(req.user[0]);
  connection.query("SELECT * FROM users WHERE username=\'"+req.user[0].username+"\';",function(err, results){
      if(err)console.log(err);
      console.log(results);
      req.user = results;
  });
  res.render('index', { title: 'Express', user: req.user[0] });
});

module.exports = router;