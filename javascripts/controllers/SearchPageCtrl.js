app.controller("SearchPageCtrl", function($rootScope, $scope, GoogleFactory, PlacesFactory, ){
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

	$scope.addNewPlace =()=>{
		let newPlace = {};
			newPlace.isDogFriendly: ,
			newPlace.name: $scope.newPlace.name,
			newPlace.comment: $scope.comment,
			newPlace.vicinity: $scope.newPlace.vicinity,
			newPlace.uid: $rootScope.user.uid,
			newPlace.googleId: "QfHqKp3PfFfsQafzUoS94zLfn5l1",
			newPlace.category : $scope.newPlace.category,
			newPlace.date: "2017-06-02T05:00:00.000Z",
			newPlace.dogId: 
		PlacesFactory.postNewPlace
	}
	// $scope.newPlace = ()=>{
	// 	PlacesFactory.postNewPlace
	// }


});