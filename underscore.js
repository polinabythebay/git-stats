var _ = require('underscore');
var fs = require('fs');

/*************************************************************
Use Underscore and FS and read in JSON and return repo
Languages by number
**************************************************************/

fs.readFile('./repos.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    console.log(obj);
});


