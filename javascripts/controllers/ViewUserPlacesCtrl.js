app.controller("ViewUserPlacesCtrl", function($rootScope, $scope, PlacesFactory, DogFactory) {
	$scope.places = [];
	$scope.editedPlace ={};


	let getUsersPlaces = (place) => {
		PlacesFactory.getPlacesList($rootScope.user.uid)
		.then((placez) => {
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
		}).catch((error)=>{
			console.log("error in getDogsPerPlace", error);
		});
	};


	$scope.deleteCard = (placeId) =>{
		PlacesFactory.deleteSinglePlace(placeId)
		.then(()=>{
			getUsersPlaces();	
		}).catch((error)=>{
			console.log("deleteCard error", error);
		});
	};

	getUsersPlaces();

});


