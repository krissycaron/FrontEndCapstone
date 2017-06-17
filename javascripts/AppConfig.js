app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    var logged = AuthFactory.isAuthenticated();
    var appTo;
    if (currRoute.originalPath) {
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
});


app.config(function($routeProvider){

	$routeProvider
  	.when('/auth', {
	    templateUrl: 'partials/auth.html',
	    controller: 'AuthCtrl'
	  })
	.when('/newplace', {
		templateUrl: 'partials/searchPlaces.html',
		controller: 'SearchPageCtrl'
	  })
	.when('/list', {
		templateUrl: 'partials/viewUserPlaces.html',
		controller: 'ViewUserPlacesCtrl'
	  })
  .when('/profile', {
    templateUrl: 'partials/userProfile.html',
    controller: 'UserProfileCtrl'
    })
  .when('/editPlace/:placeId', {
    templateUrl: 'partials/searchPlaces.html',
    controller: 'EditPlaceCtrl'
    })
  		.otherwise('/auth');

});
