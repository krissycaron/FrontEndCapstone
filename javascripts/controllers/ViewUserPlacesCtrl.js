app.controller("ViewUserPlacesCtrl", function($rootScope, $scope, PlacesFactory, DogFactory) {
console.log("inside the ViewUserPlacesCtrl");
///this is the users saved places view
	$scope.places = [];


	let getUsersPlaces = (place) => {
		PlacesFactory.getPlacesList($rootScope.user.uid)
		.then((placez) => {
			console.log("placez", placez);
			$scope.places = placez;
			$scope.places.forEach((place)=>{
				getDogsPerPlace(place);
			});
		}).catch((error)=>{
			console.log("error in getUsersPlaces", error);
		});
	};

	let getDogsPerPlace = (place) =>{
		DogFactory.getDogs($rootScope.user.uid)
		.then((dogz)=>{
			dogz.forEach((dog)=>{
				if (dog.id === place.dogId){
					place.dog = dog;
				}
			});
			console.log(dogz);
		}).catch((error)=>{
			console.log("error in getDogsPerPlace", error);
		});
	};



	$scope.deleteCard = (placeId) =>{
		PlacesFactory.deleteSinglePlace(placeId)
		.then(()=>{
			console.log("deleteCard in ViewUserPlacesCtrl");
			getUsersPlaces();	
		}).catch((error)=>{
			console.log("deleteCard error", error);
		});
	};

	getUsersPlaces();
 	console.log($scope.places);
});


