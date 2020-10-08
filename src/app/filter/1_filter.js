angular.module("filter", []).controller("filterCont", function ($scope) {
  $scope.prod1 = "mobile View";
  $scope.prod2 = "MOBILE View";
  $scope.prod3 = "mobile view";

  $scope.names = [{ name: "zeeba" }, { name: "Alex" }, { name: "Pro" }];
});
