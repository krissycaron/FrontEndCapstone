app.controller("UserProfileCtrl", function($rootScope, $scope, PlacesFactory, DogFactory) {
	console.log("UserProfileCtrl");
	$scope.dogs = [];

	$scope.dogName = false;

	let getPupPerUser= () => {
		DogFactory.getDogs($rootScope.user.uid)
		.then((dogz) => {
			console.log("dogz in the UserProfileCtrl", dogz);
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
			console.log(results);
			getPupPerUser();
		}).catch((error)=>{
			console.log("error in addDog");
		});
	};

	$scope.deleteDog = (dogId) =>{
		console.log("deleteDog clicked");
		DogFactory.deleteSingleDog(dogId)
		.then(()=>{
			console.log("deleteDog in UserProfileCtrl");
			getPupPerUser();	
		}).catch((error)=>{
			console.log("deleteDog error", error);
		});
	};
	




});