/*************************************************************
Server dependencies
**************************************************************/
var express = require('express');

/*************************************************************
Local dependencies
**************************************************************/
var github = require('./github');

/*************************************************************
Express Setup
**************************************************************/

var app = express();
app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*************************************************************
Routes
**************************************************************/

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/repos', function(request, response) {
  //call github API here
  //going to 
  response.render('repos');
});

/*************************************************************
Start
**************************************************************/

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});