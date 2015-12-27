'use strict'

angular.module('amplitudeApp', [
	'ui.router',
  	'ngAnimate',
  	'ui.bootstrap',
  	'amplitudeApp.services',
  	'amplitudeApp.directives',
  	'amplitudeApp.controllers',
  	'amplitudeApp.dashboard'
])

// lo dash, that way you can use Dependency injection.
.constant('_', window._)


.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/dashboard');

	$stateProvider

	    .state('dashboard', {
	      url: '/dashboard',
	      templateUrl: 'dashboard/dashboard.html',      
	      resolve: {
	        // controller will not be loaded until $waitForAuth resolves
	        // Auth refers to our $firebaseAuth wrapper in the example above
	        
	        // "currentAuth": ["Auth", function(Auth) {
	          // $waitForAuth returns a promise so the resolve waits for it to complete]\
	          // return Auth.$requireAuth();
	        
	        //}]
	      }
	    })
	    ;

	}])

;