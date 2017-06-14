app.controller("SearchPageCtrl", function($scope, GoogleFactory,){
console.log("inside seach controller");
	$scope.searchPlaces = "";
	$scope.places = [];
	$scope.newPlace = {};

	$scope.newForm = false;

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

	$scope.newView = (place) =>{
		//left hand side is the seed, right is value from api
		$scope.newPlace.name =place.name;
		$scope.newPlace.vicinity =place.vicinity;
		$scope.newPlace.googleId =place.place_id;
		console.log($scope.newPlace);
		$scope.newForm=true;
		}

	$scope.setCategory = (clickput) => {
		$scope.newPlace.category = clickput;
	}


	$scope.savePlaceClicked = ()


});