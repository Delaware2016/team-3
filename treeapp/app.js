var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'ec2-54-210-156-211.compute-1.amazonaws.com',
    user : 'cfg',
    password : process.env.PW,
    database : 'cfg'
});
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var events = require('./routes/events');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/events', events);

app.get('/login', function(req, res, next) {
  res.render('login');
});

app.get('/register', function(req,res,next){
  res.render('regist');
})
app.get('/volunteer',function(req,res,next){
  res.render('volunteer');
})
app.get('/shop',function(req,res,next){
  res.render('shop');
})
app.get('/social', function(req,res,next){
  res.render('social');
});
app.get('/donations', function(req,res,next){
  res.render('donations');
})

app.post('/addPoints', function(req,res,next){
  console.log(req.user);
  connection.query('UPDATE users SET points = points+'+req.body.points+' WHERE username=\''+req.user+'\';');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new FacebookStrategy({
    clientID: "1590000834638958",
    clientSecret: "577892f85d40c0c2f233b5568737f73a",
    callbackURL: "http://ec2-54-210-156-211.compute-1.amazonaws.com:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    //merge statement?
    connection.query('INSERT IGNORE INTO users (username) VALUES (\''+profile.displayName+'\')');
    connection.query('SELECT * FROM users WHERE username=\''+profile.displayName+'\';',function(err, results){
      if(err)console.log(err);
      done(null,results);
    });
  }
));
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});





// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
