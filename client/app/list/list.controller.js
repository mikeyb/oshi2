'use strict';

angular.module('oshi2App')
  .controller('ListCtrl', function ($scope, $stateParams, Games, Categories, Providers) {

    $scope.categories = [{name: 'loading...'}];
    Categories.getAll().then(function (categories) {
      $scope.categories = categories;
    });

    $scope.providers = [{name: 'loading...'}];
    Providers.getAll().then(function (providers) {
      $scope.providers = providers;
    });

    $scope.games = [];
    if ($stateParams.category) {
      $scope.listTitle = $stateParams.category;
      Games.getByCategory($scope.listTitle).then(function (games) {
        $scope.games = games;
      });
    }
    else if ($stateParams.provider) {
      $scope.listTitle = $stateParams.provider;
      Games.getByProvider($scope.listTitle).then(function (games) {
        $scope.games = games;
      });
    }
    else {
      $scope.listTitle = 'all';
      Games.getByCategory($scope.listTitle).then(function (games) {
        $scope.games = games;
      });
    }

  });
