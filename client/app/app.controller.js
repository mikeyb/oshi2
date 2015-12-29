'use strict';

angular.module('oshi2App')
  .controller('AppCtrl', function ($scope, $window) {

	$scope.isHome = function () { // jshint ignore:line
		if ($window.location.pathname === '/') {
		    return true;
		} else {
		    return false;
		}
	};
  });
