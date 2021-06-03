import angular from 'angular';
import '../lib/angular-select'

angular
  .module("selectExampleApp", ['angular-select'])
  .controller("demoSelectCtrl", demoSelectCtrl); 

demoSelectCtrl.$inject = ["$scope", "$http"];
function demoSelectCtrl($scope, $http) {

  // Form Model
  $scope.formData = {};

  // Countries Data
  $scope.countries = {
    title: "Nazione",
    items: [
      { label: "France", value: "FR" },
      { label: "Inghilterra", value: "UK" },
      { label: "Germania", value: "DE" },
    ],
  };

  // Countries Callback
  $scope.countriesCallback = function (index) {
    $scope.callbackResult = index;
  };

  // Age data
  $scope.age = {
    title: "Età",
    items: [
      { label: "18", value: 18 },
      { label: "19", value: 19 },
      { label: "20", value: 20 },
      { label: "21", value: 21 },
      { label: "22", value: 22 },
      { label: "23", value: 23 },
      { label: "24", value: 24 },
      { label: "25", value: 25 },
      { label: "26", value: 26 },
      { label: "27", value: 27 },
      { label: "28", value: 28 },
      { label: "29", value: 29 },
      { label: "30", value: 30 },
      { label: "31", value: 31 },
      { label: "32", value: 32 },
      { label: "33", value: 33 },
      { label: "34", value: 34 },
      { label: "35", value: 35 },
    ],
  };

  // Get beer list from service
  var getBeers = function () {
    return $http({
      method: "GET",
      url: "https://api.punkapi.com/v2/beers",
    }).then(function (response) {
      var beerArray = response.data;
      var newBeerArray = [];

      beerArray.forEach(function (arrayItem) {
        newBeerArray.push({
          label: arrayItem.name,
          value: arrayItem.name,
        });
      });

      // return processed items
      return newBeerArray;
    });
  };

  // evaluate promise inside controller
  getBeers().then(function (response) {
    // API Rest beer
    $scope.beers = {
      title: "Birre",
      items: response,
    };
  });
}
