var app = angular.module('app', []);

app.filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
  };
});

// app.controller('MainController', function($scope) {
//   $scope.items = [];
//   for (var i = 0; i < 100; i++) $scope.items.push(i);
// });