var https = require('https');

/*************************************************************
Uses Github API to pull Repo Data
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


//I'm getting rate limited by Github :( sadness
//exports.getRepoData("polinadotio");