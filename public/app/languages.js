angular.module('gitStats.languages', [])

.controller("LineController", function ($scope, Languages) {

  $scope.labels = [];
  $scope.series = ['Series A'];
  $scope.data = [];

  $scope.getLanguages = function() {
    var langs = Languages.getLanguages();

    console.log("Fetching languages from the factory");
    console.log("languages", langs);

    var series = [];

    for (var item in langs) {
      $scope.labels.push(item);
      series.push(langs[item]);
    }
    
    $scope.data.push(series);
  }

   $scope.getLanguages();
})

.factory('Languages', function ($http) {

  var getLanguages = function() {

    var languages = 
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
    
    return languages;
  }

  return {
    getLanguages: getLanguages
  };
})