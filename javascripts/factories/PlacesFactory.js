app.factory("PlacesFactory", function($q, $http, GOOGLE_PLACES, FIREBASE_CONFIG){
   
   let getPlacesList = ((userId)=>{
    return $q ((resolve, reject)=>{
    let placez  =[];
      $http.get(`${FIREBASE_CONFIG.databaseURL}/places.json?orderBy="uid"&equalTo="${userId}"`)
      .then((resultz)=>{
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
  

    let getSinglePlace = (id) => {
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/places/${id}.json`)
      .then((resultz)=>{
        resultz.data.id = id;
        resolve(resultz.data);
      }).catch(()=>{
        console.log("get single item error", error);
      });
    });
  };


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

  let editPlace = (place) =>{
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/places/${place.id}.json`,
      JSON.stringify ({
        isDogFriendly: place.isDogFriendly,
        name: place.name,
        comment: place.comment,
        vicinity: place.vicinity,
        uid: place.uid,
        googleId: place.googleId,
        category:place.category,
        date: place.date,
        dogId: place.dogId
      })
      ).then((resultz)=>{
        resolve(resultz);
      }).catch((error)=>{
        console.log("error in editItem");
      });
    });
  };

  let deleteSinglePlace = (Id)=>{
    return $q((resolve, reject)=>{
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/places/${Id}.json`)
      .then((resultz)=>{
        resolve(resultz);
      }).catch((error)=>{
        console.log("error in the deleteSinglePlace", error);
      });
    });
  };

  return {postNewPlace: postNewPlace, getPlacesList:getPlacesList, getSinglePlace:getSinglePlace, editPlace:editPlace, deleteSinglePlace:deleteSinglePlace};

});


