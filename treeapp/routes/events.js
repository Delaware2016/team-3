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
  if(!req.user)res.end('not authorized')
  connection.query("SELECT * FROM events;",function(err,results){
      if(err)res.end('err');
      res.send(results);
      res.end();
  });
});

router.post('/',function(req,res,next){

})

router.get('/add',function(req,res,next){
    if(!req.user)res.end('not authorized');
    res.render('new_event');
})

module.exports = router;