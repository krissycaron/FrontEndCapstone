app.controller("UserProfileCtrl", function($rootScope, $location, $scope, PlacesFactory, DogFactory) {
	$scope.dogs = [];
	$scope.dogName = false;

	let getPupPerUser= () => {
		DogFactory.getDogs($rootScope.user.uid)
		.then((dogz) => {
			$scope.dogs = dogz;
		}).catch((error)=>{
			console.log("error in getPupPerUser", error);
		});
	};

	getPupPerUser();


	$scope.addDog = () =>{
		$scope.dog.uid = $rootScope.user.uid;
		DogFactory.postNewDog($scope.dog)
		.then((results)=>{
			getPupPerUser();
			$location.url("/profile");
		}).catch((error)=>{
			console.log("error in addDog");
		});
	};

	$scope.deleteDog = (dogId) =>{
		DogFactory.deleteSingleDog(dogId)
		.then(()=>{
			getPupPerUser();	
		}).catch((error)=>{
			console.log("deleteDog error", error);
		});
	};
	
});