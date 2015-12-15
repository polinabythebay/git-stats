var gitStats = angular.module("gitStats", ["chart.js"])

gitStats.controller("LineController", function ($scope) {

  $scope.labels = ['Ruby', 'JavaScript', 'Java', 'HTML', 
  'Python', 'CSS', 'C#', 'Objective-C', 'Shell', 'C', 'Rust', 'PHP'];
  $scope.series = ['Series A'];

  $scope.data = [
    [29, 15, 6, 6, 4, 3, 2,2,2,1,1,1,1]
  ];

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

});
    