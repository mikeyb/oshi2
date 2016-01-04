'use strict';

angular.module('oshi2App')
  .controller('PlayCtrl', function ($scope, $sce, $stateParams, $window) {

	  console.log('D> stateParams: ', $stateParams);
	  $scope.gameUrl = $sce.trustAsResourceUrl(decodeURIComponent($stateParams.gameUrl));
	  console.log('gameUrl: ', $scope.gameUrl);
	  
	  var aspectRatio = 0.5625;
	  if ($stateParams.aspectRatio === '4:3') {
		  aspectRatio = 0.75;
	  }
	  $scope.frameHeight = $window.innerHeight - 80;
	  $scope.frameWidth = $scope.frameHeight / aspectRatio;
	  
	  
  });
