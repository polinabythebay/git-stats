var gitStats = angular.module("gitStats", [
  'chart.js',
  'gitStats.languages',
  'gitStats.trends',
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

