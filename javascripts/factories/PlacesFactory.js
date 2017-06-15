app.factory("PlacesFactory", function($q, $http, GOOGLE_PLACES, FIREBASE_CONFIG){
  
   let getPlacesList = ((userId)=>{
    return $q ((resolve, reject)=>{
      let placez  =[];
      $http.get(`${FIREBASE_CONFIG.databaseURL}/places.json?orderBy="uid"&equalTo="${userId}"`)
      .then((resultz)=>{
        console.log("resultz in getPlacesList", resultz);
        var placesCollection = resultz.data;
                if (placesCollection !== null){
                  Object.keys(placesCollection).forEach((key) => {
                  placesCollection[key].id=key;
                  placez.push(placesCollection[key]);
                  });
            }
        resolve(placez);
      }).catch((error)=>{
        console.log("getDogs error", error);
      });
    });
  });
  


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

  return {postNewPlace: postNewPlace, getPlacesList:getPlacesList};



});


