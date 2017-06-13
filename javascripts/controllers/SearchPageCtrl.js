app.controller("SearchPageCtrl", function($scope, GoogleFactory,){
console.log("inside seach controller");
	$scope.searchPlaces = "";
	$scope.places = [];

	$scope.returnPlaces= ()=>{
		GoogleFactory.getPlaces($scope.searchPlaces)
		.then((places)=>{
			console.log("hitting then returnPlaces", places.data.results);
			$scope.places = places.data.results;
		})
		.catch((error)=>{
			console.log("Error in returnPlaces", error);
		});
	};


});