'use strict';

angular.module('oshi2App')
  .factory('Favorites', function ($rootScope, $resource, $q, ENDPOINT, Games) {

    var resource = $resource(ENDPOINT + 'api/open/favorite/:gameId', {gameId: '@gameId'});
    var favorites = [];

    $rootScope.$on('login:success', function (event, loginData) {
      if (loginData.favorites) {
        favorites = loginData.favorites;
      }

      if (favorites.length > 0) {
        Games.getAll().then(function (games) {
          _.each(games, function (game) {
            if (favorites.includes(game.id)) {
              game.isFavorite = true;
            }
          });
        });
      }
    });

    return {

      addOrRemove: function (game) {
        if (game.isFavorite) {
          return this.remove(game);
        } else {
          return this.add(game);
        }
      },

      add: function (game) {
        var deferred = $q.defer();

        resource.save({gameId: game.id}).$promise.then(function () {
          game.isFavorite = true;
          favorites.push(game.id);
          deferred.resolve();
        }, function () {
          deferred.reject('Failed adding favorite');
        });

        return deferred.promise;
      },

      remove: function (game) {
        var deferred = $q.defer();

        resource.delete({gameId: game.id}).$promise.then(function () {
          game.isFavorite = false;
          var gameIndex = favorites.indexOf(game.id);
          if (gameIndex > -1) {
            favorites.splice(gameIndex, 1);
          }
          deferred.resolve();
        }, function () {
          deferred.reject('Failed adding favorite');
        });

        return deferred.promise;
      }

    };
  });
