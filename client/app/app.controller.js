'use strict';

angular.module('oshi2App')
  .controller('AppCtrl', function ($scope, $window) {

	$scope.isHome = function () { // jshint ignore:line
		console.log('D> $window.location.pathname: ', $window.location.pathname);
		if ($window.location.pathname === '/') {
		    return true;
		} else {
		    return false;
		}
	};
  });
