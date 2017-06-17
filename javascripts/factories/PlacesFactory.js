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

  let editPlace = (place) =>{
    console.log("place", place);
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/places/${place.Id}.json`,
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
        console.log("delete clicked");
        resolve(resultz);
      }).catch((error)=>{
        console.log("error in the deleteSinglePlace", error);
      });
    });
  };

  return {postNewPlace: postNewPlace, getPlacesList:getPlacesList, editPlace:editPlace, deleteSinglePlace:deleteSinglePlace};

});





      // "isDogFriendly": true,
      // "name": "placeName2",
      // "comment": "test this comment place",
      // "vicinity": "1812 21st Avenue South, Nashville",
      // "uid": "vcpZR35CjCO3TrkkpUEkC5iBI222",
      // "googleId": "QfHqKp3PfFfsQafzUoS94zLfn5l1",
      // "category" : "lunch",
      // "date": "2017-06-02T05:00:00.000Z",
      // "dogId": "dogId0"
