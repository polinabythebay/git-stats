/*************************************************************
Server dependencies
**************************************************************/
var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var path = require('path');
var morgan = require('morgan');

/*************************************************************
Local dependencies
**************************************************************/
var github = require('./app/github');
var repoStats = require('./app/repo_stats');

/*************************************************************
Express Setup
**************************************************************/

var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//logging incoming requests
app.use(morgan('dev'));
app.use(bodyParser());
app.use(partials());
//load client side assets
app.use(express.static(path.join(__dirname, 'public')));
//client side package manager
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

/*************************************************************
Routes
**************************************************************/

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/repos', function(request, response) {

  //not going to call API here for now
  // github.getRepoData(req.user.username, function(result) {
  //   res.render('repos',{ user: req.user, repos: result });
  // });
  
  repoStats.returnRepoStats(function(result) {
    response.render('repos',{ user: "polinadotio", repos: result });
  });
});

/*************************************************************
Start
**************************************************************/

app.listen(app.get('port'), function() {

  console.log('App is running on port', app.get('port'));
});