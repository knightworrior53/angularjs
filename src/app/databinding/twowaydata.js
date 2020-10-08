angular.module("dataBind", []).controller("twoWayDB", function ($scope) {
  $scope.name = "Alex";

  $scope.sayHello = function (name) {
    alert(name);
    console.log("%c name" + name, "color:red");
  };
});
