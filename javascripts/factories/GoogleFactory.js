app.factory("GoogleFactory", function($q, $http, GOOGLE_PLACES){

	let getPlaces = (userInput)=>{
      return $q((resolve, reject) => {
        $http.get(`https://pet-places.herokuapp.com/api/petPlaces/?location=36.174465,-86.767960&rankby=distance&keyword=${userInput}&key=${GOOGLE_PLACES}`)
      
        .then((googleData)=> {
            resolve(googleData);
        })
        .catch((error) => {
          reject(error);
        });
      }); 
    };


	return {getPlaces: getPlaces};
});