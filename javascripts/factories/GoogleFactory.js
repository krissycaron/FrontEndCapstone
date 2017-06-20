app.factory("GoogleFactory", function($q, $http, GOOGLE_PLACES){

	let getPlaces = (userInput)=>{
      return $q((resolve, reject) => {
        // $.ajax().done().fail ... this is what we were using. nad becasue there is another lib you need to put in the argument. 
        $http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.174465, -86.767960&rankby=distance&keyword=${userInput}&key=${GOOGLE_PLACES}`)
      
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