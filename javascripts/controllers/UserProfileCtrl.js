app.controller("UserProfileCtrl", function($rootScope, $scope, PlacesFactory, DogFactory) {
	$scope.dogs = [];

	let getPupPerUser= () => {
		DogFactory.getDogs($rootScope.user.uid)
		.then((dogz) => {
			console.log("dogz in the UserProfileCtrl", dogz);
			$scope.dogs = dogz;
		}).catch((error)=>{
			console.log("error in getPupPerUser", error);
		});
	};

	

});