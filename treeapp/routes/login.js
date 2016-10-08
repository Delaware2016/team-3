var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'ec2-54-210-156-211.compute-1.amazonaws.com',
    user : 'cfg',
    password : process.env.PW,
    database : 'cfg'
});

// router.post('/',function(req,res,next){
//     console.log(req.body);
//     connection.query('SELECT password FROM users WHERE username=\''+req.body.user+'\';',function(err,rows,fields){
//         if(err) res.sendStatus(500);
        
//     });
//     res.redirect('/')
// })

module.exports = router;
