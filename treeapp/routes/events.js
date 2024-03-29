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
      res.end('not authorized')
      return;
  }
  connection.query("SELECT * FROM events;",function(err,results){
      if(err)res.end('err');
      res.send(results);
      res.end();
  });
});

router.post('/',function(req,res,next){
    var NodeGeocoder = require('node-geocoder');

    var options = {
        provider: 'google',

        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyBm4pX8aA16wwNdzhL4pr-u7TVicKUsl2Q', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
    };

    var geocoder = NodeGeocoder(options);

    var location = req.body.location;
    var description = req.body.description;
    var date = req.body.description;

    // Using callback
    geocoder.geocode(location, function(err, resp) {
        resp[0].latitude;
        resp[0].longitude;
        connection.query("INSERT INTO events (full_location, point, description, date) VALUES ("+
        "\'"+req.body.location+"\',"+
        "GeomFromText('POINT("+resp[0].latitude+" "+resp[0].longitude+")'),"+
        "\'"+req.body.description+"\',"+
        "\'"+req.body.date+"\'"+
        ');',function(err,results){
            if(err)console.log(err);
            console.log(results);
            res.end('ok');
        })
    });
});

router.get('/add',function(req,res,next){
    if(!req.user)res.end('not authorized');
    res.render('new_event');
});

module.exports = router;