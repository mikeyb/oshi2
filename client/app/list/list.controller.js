'use strict';

angular.module('oshi2App')
  .controller('ListCtrl', function ($scope, Games) {
	  
      $scope.games = [];
      Games.all().$promise.then(function (gamesList) {
          $scope.games = gamesList;
      });

  });
