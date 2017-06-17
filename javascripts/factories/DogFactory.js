app.factory("DogFactory", function($q, $http, FIREBASE_CONFIG){

	let getDogs = ((userId)=>{
		return $q ((resolve, reject)=>{
			let dogz  =[];
			$http.get(`${FIREBASE_CONFIG.databaseURL}/dogs.json?orderBy="uid"&equalTo="${userId}"`)
			.then((resultz)=>{
				console.log("resultz in getDogs", resultz);
				var dogCollection = resultz.data;
            		if (dogCollection !== null){
              		Object.keys(dogCollection).forEach((key) => {
	                dogCollection[key].id=key;
	                dogz.push(dogCollection[key]);
	              	});
            }
				resolve(dogz);
			}).catch((error)=>{
				console.log("getDogs error", error);
			});
		});
	});

	


	return {getDogs:getDogs};

});

