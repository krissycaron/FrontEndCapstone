app.factory("DogFactory", function($q, $http, FIREBASE_CONFIG){

	let getDogs = (userId)=>{
		let dogz  =[];
		return $q ((resolve, reject)=>{
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
	};


	let postNewDog = (newDogs)=>{
		console.log(newDogs);
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/dogs.json`, JSON.stringify(newDogs))
			.then((dogResults) =>{
				resolve(dogResults);
			}).catch((error)=>{
				console.log("error in the postNewDog");
			});
		});
	};

	let deleteSingleDog = (dogId) =>{
		console.log("deleteSingleDog clicked dog factory");
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/dogs/${dogId}.json`)
		     .then((resultz)=>{
		        console.log("delete clicked");
		       resolve(resultz);
		     }).catch((error)=>{
		        console.log("error in the deleteSingleDog", error);
		     });
		});
	};



	return {getDogs:getDogs, postNewDog: postNewDog, deleteSingleDog: deleteSingleDog};

});

