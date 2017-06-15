app.controller("SearchPageCtrl", function($rootScope, $http, $location, $q, $scope, GoogleFactory, PlacesFactory, DogFactory){

	$scope.searchPlaces = "";
	$scope.places = [];
	$scope.newPlace = {};
	$scope.dogs = [];

	$scope.newForm = false;

	DogFactory.getDogs($rootScope.user.uid)
		.then((dogs)=>{
			$scope.dogs = dogs;
			console.log("inside the DogFactory to get the dog id", dogs);
		}).catch((error)=>{
			console.log("error in the DogFactory.getDogs", error);
		});


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
		console.log("addNewPlace was clicked");
			$scope.newPlace.isDogFriendly = $scope.newPlace.isDogFriendly;
			$scope.newPlace.comment= $scope.newPlace.comment;
			$scope.newPlace.uid= $rootScope.user.uid;
			$scope.newPlace.category= $scope.newPlace.category;
			$scope.newPlace.date= "2017-06-02T05:00:00.000Z";
	
			PlacesFactory.postNewPlace($scope.newPlace)
			.then((response)=>{
				$scope.newPlace = {}; //clears the object
				$location.url("/list")
			}).catch((error)=>{
				console.log("postNewPlace error in SearchPageCtrl", error);
			});

	};

	$scope.chooseDog=(dogId)=>{
	$scope.newPlace.dogId= dogId;
		
	};
	

});
