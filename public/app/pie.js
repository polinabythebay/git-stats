angular.module('gitStats.pie', [])

.controller("PieController", function ($scope) {
    $scope.labels = ["JavaScript", "Python", "Ruby","HTML","CSS","C"];
    $scope.data = [14, 4, 3,2,2,2];
})

.factory('Trends', function ($http) {
  return {
  };
})