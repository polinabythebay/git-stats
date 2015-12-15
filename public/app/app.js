var gitStats = angular.module("gitStats", [
  'chart.js',
  'gitStats.languages',
  'gitStats.trends',
  'gitStats.pie',
  'ngRoute',
])
.config(function($routeProvider, $httpProvider) {
  // $routeProvider
  //   .when('/test', {
  //     templateUrl: 'app/signin.html',
  //     controller: 'AuthController'
  //   })
  //   .otherwise({redirectTo: '/'});
})

