app.factory("PlacesFactory", function($q, $http, GOOGLE_PLACES, FIREBASE_CONFIG){
  
   let postNewPlace = (newSavedPlace) =>{
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/places.json`, JSON.stringify(newSavedPlace))
      .then((resultz)=>{
        resolve(resultz);
      }).catch((error)=>{
        reject(error);
      });
    });
  };

return {postNewPlace: postNewPlace}



});


