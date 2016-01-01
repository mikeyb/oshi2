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
    $scope.gamesPage = [];
    if ($stateParams.category) {
      $scope.listTitle = $stateParams.category;
      Games.getByCategory($scope.listTitle).then(function (games) {
        $scope.games = games;
        $scope.paginate(0);
      });
    }
    else if ($stateParams.provider) {
      $scope.listTitle = $stateParams.provider;
      Games.getByProvider($scope.listTitle).then(function (games) {
        $scope.games = games;
        $scope.paginate(0);
      });
    }
    else {
      $scope.listTitle = 'all';
      Games.getByCategory($scope.listTitle).then(function (games) {
        $scope.games = games;
      });
    }

    var pageSize = 10;
    $scope.paginate = function (pageNumber) {
      $scope.numberOfPages = Math.ceil($scope.games.length / pageSize);
      if (pageNumber < 0 || $scope.numberOfPages <= pageNumber) {
        return;
      }

      var initIndex = pageNumber * pageSize;
      var endIndex = Math.min(initIndex + pageSize, $scope.games.length);
      $scope.gamesPage = $scope.games.slice(initIndex, endIndex);
      $scope.currentPage = pageNumber;
      $scope.hasNextPage = $scope.numberOfPages > (pageNumber + 1);
      $scope.hasPreviousPage = pageNumber > 0;
      $scope.pages = new Array($scope.numberOfPages); // to overcome ng-repeat limitation
    };

    $scope.displayType = 'list';


    // TODO check why animation is not working (original realstate site seams to be using a jquery plugin to toggle the menu)
    // TODO add 'loading...' visual feedback
    $scope.lastPlayedGamesMenuOpen = false;
    $scope.toggleLastPlayedMenu = function() {
      $scope.lastPlayedGamesMenuOpen = !$scope.lastPlayedGamesMenuOpen;
      if ($scope.lastPlayedGamesMenuOpen) {
        Games.getLastPlayed().$promise.then(function(games) {
          $scope.lastPlayedGames = games;
        });
      }
    };
  });
