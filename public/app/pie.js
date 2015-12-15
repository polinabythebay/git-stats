angular.module('gitStats.pie', [])

.controller("PieController", function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
})

.factory('Trends', function ($http) {
  return {
  };
})