app.controller("ViewUserPlacesCtrl", function($rootScope, $scope, PlacesFactory) {
console.log("inside the ViewUserPlacesCtrl");
///this is the users saved places view
	$scope.places = [];

	let getUsersPlaces = (place) => {
		PlacesFactory.getPlacesList($rootScope.user.uid)
		.then((placez) => {
			console.log("placez", placez);
			$scope.places = placez; 
		}).catch((error)=>{
			console.log("error in getUsersPlaces", error);
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

});


//    $scope.deleteItem = (id) =>{
//       console.log("deleteItem");
//       itemFactory.deletez(id).then(()=>{
// console.log("deleteItem");
//         getItems();
//       }).catch((error)=>{
//         console.log("delete item error", error);
//       });
//     };