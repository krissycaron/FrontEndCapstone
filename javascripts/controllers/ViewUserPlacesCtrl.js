app.controller("ViewUserPlacesCtrl", function($scope, $location, $q, $http, PlacesFactory, GoogleFactory) {
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
	}


});


///==============================


// $scope.items = [];
      
//     let getItems = () =>{
//       itemFactory.getItemList($rootScope.user.uid).then((itemz)=>{
//         console.log("items", itemz);
//         $scope.items = itemz;
//         }).catch((error)=>{
//         console.log("got and error", error);
//         });
//       };