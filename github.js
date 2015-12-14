var _ = require('underscore');
var https = require('https');

/*************************************************************
Github Repo Data
**************************************************************/

exports.getRepoData = function(username, callback) {

  var options = {
    "method": "GET",
    "hostname": "api.github.com",
    "path": "/users/"+username+"/repos?per_page=100",
    "headers": {
      "User-Agent": "puppycat"
    }
  };

  var repo_data;

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      repo_data = JSON.parse(body.toString());
      console.log("response", repo_data);
      if (callback) {
        callback(result);
      }
    });
  });

  req.end();
}

//working with hardcoded data while waiting
//for github API to reset itself
exports.languages = 
{ Ruby: 29,
JavaScript: 15,
Java: 6,
HTML: 6,
Python: 4,
CSS: 3,
'C#': 2,
'C++': 2,
'Objective-C': 2,
Shell: 1,
C: 1,
Rust: 1,
PHP: 1 };

//I'm getting rate limited by Github :( sadness
//exports.getRepoData("polinadotio");