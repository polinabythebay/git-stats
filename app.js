/*************************************************************
Server dependencies
**************************************************************/
var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var path = require('path');
var morgan = require('morgan');
var url = require('url');

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
// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));
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
  
  // repoStats.returnRepoStats(function(result) {
  //   response.render('repos',{ user: "polinadotio", repos: result });
  // });

  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  console.log("QUERY", query);
  response.render('repos',{ user: query.username, repos: {}});
});

app.get('/using-github-api', function(request, response) {
  response.render('github');
});

/*************************************************************
Start
**************************************************************/

app.listen(app.get('port'), function() {

  console.log('App is running on port', app.get('port'));
});