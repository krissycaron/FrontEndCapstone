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



    
    // let getItems = () =>{
    //   itemFactory.getItemList($rootScope.user.uid).then((itemz)=>{
    //     console.log("items", itemz);
    //     $scope.items = itemz;
    //     }).catch((error)=>{
    //     console.log("got and error", error);
    //     });
    //   };