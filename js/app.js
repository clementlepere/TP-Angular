var pizza = angular.module('pizza', []);

pizza.controller('pizzaController', function(){
  $scope.step = 1;
  $scope.adressLine = 1;
  $scope.types = types;
  $scope.pates = pates;
  $scope.extras = extras;
});
