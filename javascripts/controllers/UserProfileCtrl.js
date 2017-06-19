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
		console.log("addDog was clicked")
		DogFactory.postNewDog($rootScope.user.uid)
		.then(()=>{
			console.log("inside the addDog", )
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