// Ionic Starter App
var page;
var d = new Date();
var n = d.getDay();
switch (n) {
	case 0:
		page = "/app/sunday"; 
	break;
	case 1:
		page = "/app/monday"; 
	break;
	case 2:
		page = "/app/tuesday"; 
	break;
	case 3:
		page = "/app/wednesday"; 
	break;
	case 4:
		page = "/app/thursday"; 
	break;
	case 5:
		page = "/app/friday"; 
	break;
	case 6:
		page = "/app/saturday"; 
	break;
	
}

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
 
 .state('app.monday', {
      url: "/monday",
      views: {
        'menuContent': {
          templateUrl: "templates/monday.html",
          controller: 'mondayCtrl'
        }
      }
    })
    .state('app.tuesday', {
      url: "/tuesday",
      views: {
        'menuContent': {
          templateUrl: "templates/tuesday.html",
          controller: 'tuesdayCtrl'
        }
      }
    })
	.state('app.wednesday', {
      url: "/wednesday",
      views: {
        'menuContent': {
          templateUrl: "templates/wednesday.html",
          controller: 'wednesdayCtrl'
        }
      }
    })
  	.state('app.thursday', {
      url: "/thursday",
      views: {
        'menuContent': {
          templateUrl: "templates/thursday.html",
          controller: 'thursdayCtrl'
        }
      }
    })
	.state('app.friday', {
      url: "/friday",
      views: {
        'menuContent': {
          templateUrl: "templates/friday.html",
          controller: 'fridayCtrl'
        }
      }
    })
	.state('app.saturday', {
      url: "/saturday",
      views: {
        'menuContent': {
          templateUrl: "templates/saturday.html",
          controller: 'saturdayCtrl'
        }
      }
    })
	.state('app.sunday', {
      url: "/sunday",
      views: {
        'menuContent': {
          templateUrl: "templates/sunday.html",
          controller: 'sundayCtrl'
        }
      }
    })
      .state('app.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "templates/about.html",
          controller: 'aboutCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(page);
});
