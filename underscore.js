var _ = require('underscore');
var fs = require('fs');

/*************************************************************
Add Underscore Mixin to sort by keys
**************************************************************/

_.mixin({
    'sortKeysBy': function (obj, comparator) {
        var keys = _.sortBy(_.keys(obj), function (key) {
            return comparator ? comparator(obj[key], key) : key;
        });
    
        return _.object(keys, _.map(keys, function (key) {
            return obj[key];
        }));
    }
});

var getLanguageRank = function(arr) {

  var languages = {};

  _.each(arr, function(item) {
    if (item.language === null) {
      if (languages["No Language"]) {
        //++languages["No Language"];
      } else {
        // languages["No Language"] = 1;
      }
    } else if (languages[item.language]) {
      ++languages[item.language];
    } else {
      languages[item.language] = 1;
    }
  });

 return _.sortKeysBy(languages, function (value, key) {
  //changes from ascending to descending sort
    return -(value);
  });
}

/*************************************************************
Use Underscore and FS and read in JSON and return repo
Languages by number
**************************************************************/

fs.readFile('./repos.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    var result = getLanguageRank(obj);
    console.log(result);
});




