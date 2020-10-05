var app = angular.module("myModule", []);

app.controller("contOne", function ($scope, $rootScope) {
  $scope.name = "Raj";
  $scope.age = 33;
  $rootScope.city = "mumbai";
});

app.controller("contTwo", function ($scope) {
  $scope.name = "Dev";
  $scope.age = 30;
});
