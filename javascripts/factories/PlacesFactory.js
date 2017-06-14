app.factory("PlacesFactory", function($q, $http, GOOGLE_PLACES, FIREBASE_CONFIG){


   let postNewItem = () =>{
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/places.json`, JSON.stringify())
      .then((resultz)=>{
        resolve(resultz);
      }).catch((error)=>{
        reject(error);
      });
    });
  };





});


