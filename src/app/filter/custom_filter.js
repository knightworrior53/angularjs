var app = angular.module("filter", []);
app.filter("filt", function () {
  return function (value) {
    return value * value;
  };
});
