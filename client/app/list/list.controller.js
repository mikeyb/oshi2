'use strict';

angular.module('oshi2App')
  .controller('ListCtrl', function ($rootScope, $scope, $stateParams, $window, Games, Categories, Providers, TopWinners, LatestWinners) {

    $scope.categories = [{displayName: 'Loading...'}];
    Categories.getMenuCategories().then(function (categories) {
      $scope.categories = categories;
    });

    $scope.providers = [{displayName: 'Loading...'}];
    Providers.getAll().then(function (providers) {
      $scope.providers = providers;
    });

    // set on root to keep type across selection changes - TODO persist to survive page refresh
    if (!$rootScope.displayType) {
      $rootScope.displayType = 'list';
    }
  
    $scope.$watch('displayType', function() {
    	// This is a bit of a hack to calculate the number of columns
    	// Would be much better to calculate this dynamically somehow
    	$scope.columns = 6;
    	if ($window.innerWidth >= 992 && $window.innerWidth < 1200) {
    		$scope.columns = 4;
    	} else if ($window.innerWidth >= 768 && $window.innerWidth < 992) {
    		$scope.columns = 3;
    	} else if ($window.innerWidth >= 480 && $window.innerWidth < 768) {
    		$scope.columns = 2;
    	} else if ($window.innerWidth < 480){
    		$scope.columns = 1;   
    	}  
    	
    });

    $scope.games = [];
    $scope.gamesPage = [];
    if ($stateParams.category) {
      $scope.listTitle = $stateParams.display;
      Games.getByCategory($stateParams.category).then(function (games) {
        $scope.games = games;
        $scope.orderBy($scope.selectedOrder);
      });
    }
    else if ($stateParams.provider) {
      $scope.listTitle = $stateParams.display;
      Games.getByProvider($stateParams.provider).then(function (games) {
        $scope.games = games;
        $scope.orderBy($scope.selectedOrder);
      });
    }
    else {
      $scope.listTitle = 'All Games';
      Games.getByCategory($stateParams.category).then(function (games) {
        $scope.games = games;
        $scope.orderBy($scope.selectedOrder);
      });
    }

    $scope.selectedOrder = 'Most Popular';
    $scope.orderBy = function (orderBy) {
      $scope.selectedOrder = orderBy;

      var sortByFunction;
      if ($scope.selectedOrder === 'Most Popular') {
        sortByFunction = function (game) { return game.popularity; };
      }
      else if ($scope.selectedOrder === 'Name') {
        sortByFunction = function (game) { return game.name; };
      }
      $scope.games = _.sortBy($scope.games, sortByFunction);
      $scope.paginate(0);
    };

    $scope.setDisplayType = function(displayType) {
      $rootScope.displayType = displayType;
      console.log('DisplayType change to: ', $rootScope.displayType);
      $scope.paginate(0);
    };

    $scope.paginate = function (pageNumber) {
      var pageSize = $rootScope.displayType === 'grid' ? 24 : 10;
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

    $scope.topWinnersMenuOpen = false;
    $scope.toggleTopWinnersMenu = function() {
      $scope.topWinnersMenuOpen = !$scope.topWinnersMenuOpen;
      if ($scope.topWinnersMenuOpen) {
        TopWinners.query({size:5}).$promise.then(function(topWinners) {
          $scope.topWinners = topWinners;
        });
      }
    };

    $scope.latestWinnersMenuOpen = false;
    $scope.toggleLatestWinnersMenu = function() {
      $scope.latestWinnersMenuOpen = !$scope.latestWinnersMenuOpen;
      if ($scope.latestWinnersMenuOpen) {
        LatestWinners.query({size:5}).$promise.then(function(latestWinners) {
          $scope.latestWinners = latestWinners;
        });
      }
    };
  });
