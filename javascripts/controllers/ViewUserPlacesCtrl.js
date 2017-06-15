app.controller("ViewUserPlacesCtrl", function($rootScope, $scope, PlacesFactory) {
console.log("inside the ViewUserPlacesCtrl");
///this is the users saved places view
	$scope.places = [];

	let getUsersPlaces = () => {
		PlacesFactory.getPlacesList($rootScope.user.uid)
		.then((placez) => {
			console.log("placez", placez);
			$scope.places = placez; 
		}).catch((error)=>{
			console.log("error in getUsersPlaces", error);
		});
	};

	getUsersPlaces();

});


