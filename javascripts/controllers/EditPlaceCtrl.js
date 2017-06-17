app.controller("EditPlaceCtrl", function($location, $routeParams, $scope, PlacesFactory) {
	console.log("inside the EditPlaceCtrl");
	$scope.newForm = true;
	$scope.newPlace = {};

	$scope.editMode = true;

	//$scope.newPlace ... coming from firebase now not google. 

	// will need todo a get single in the places factory and get singele place by id//
	// route params . place.id 
	//results set to $scope.newplace

	$scope.setCategory = (clickput) => {
		$scope.newPlace.category = clickput;
	};

	$scope.chooseDog=(dogId)=>{
	$scope.newPlace.dogId = dogId;
		
	};

	//edit scope function here: 
	$scope.editSinglePlace = ()=>{
		PlacesFactory.editPlace($scope.newPlace)
		.then(()=>{
			$location.url(`/list`);
		}).catch((error)=>{
			console.log("error in editSinglePlace", error);
		});
	};

	let getSinglePlace = (placeId) =>{
		console.log("edit button clicked");
		PlacesFactory.getSinglePlace(placeId)
		.then((resultz)=>{
			console.log(resultz);
			resultz.dueDate =new Date(resultz.dueDate);
			$scope.newPlace = resultz;
			// getUsersPlaces();
		}).catch((error)=>{
			console.log("error in editThisPlace", error);
		});
	};
	getSinglePlace($routeParams.placeId);

});




