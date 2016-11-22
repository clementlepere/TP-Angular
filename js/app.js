
var pizza = angular.module('pizza', []);

pizza.controller('pizzaController', function($scope){

	$scope.types = types;
	$scope.pates = pates;
	$scope.extras = extras;

	$scope.choice = {slice: 6, types: 8, pates: 0, extras: []};

	$scope.step = 1;
	$scope.adressLine = 1;
});
