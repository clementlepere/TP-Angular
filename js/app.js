pizza.controller('pizzaController', function($scope){

	$scope.types = types;
	$scope.pates = pates;
	$scope.extras = extras;
	$scope.step = 1;
	$scope.adressLine = 1;

	$scope.choice = {slice: 6, types, pates, extras};

});
