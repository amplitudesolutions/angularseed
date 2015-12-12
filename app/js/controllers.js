'use strict';

angular.module('amplitudeApp.controllers', [])

.controller('menuBarCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

	$scope.toggleSidenav = function() {
		$mdSidenav('left').toggle();
	}

}])


;