app = angular.module("myModule", []);

app.directive("myEleDirective", function () {
  return {
    template: "<h1>Hello Custom Ele Directive</h1>",
  };
});

app.directive("myAttDirective", function () {
  return {
    template: "<h1>Hello Custom Att Directive</h1>",
  };
});

app.directive("myClassDirective", function () {
  return {
    restrict: "C",
    template: "<h1>Hello Custom Class Directive</h1>",
  };
});

app.directive("myCommDirective", function () {
  return {
    restrict: "M",
    replace: true,
    template: "<h1>Hello Custom Comment Directive</h1>",
  };
});
