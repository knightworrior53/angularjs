var app = angular.module("myModule", []);

app.controller("contOne", function ($scope, $rootScope) {
  $scope.ename = "Raj";
  $scope.age = 33;
  $rootScope.city = "mumbai";
});

app.controller("contTwo", function ($scope) {
  $scope.tname = "Dev";
  $scope.age = 30;
});

app.controller("contThree", function ($scope) {
  $scope.sname = "Anand";
  $scope.age = 53;
});
