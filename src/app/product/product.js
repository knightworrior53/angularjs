(function () {
  angular.module("store", []).controller("storeController", function () {
    this.products = gems;
  });
  var gems = [
    {
      name: "KitKat",
      price: "10",
      description: "New in market",
      Canpurchase: true,
      Soldout: false,
    },
    {
      name: "Dairymilk",
      price: "100",
      description: "New in shop",
      Canpurchase: true,
      Soldout: false,
    },
    {
      name: "FiveStar",
      price: "1000",
      description: "New in demand",
      Canpurchase: true,
      Soldout: false,
    },
  ];
  console.table(gems);
})();
