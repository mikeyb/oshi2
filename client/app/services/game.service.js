'use strict';

angular.module('oshi2App')
  //.factory('Games', function($resource, ENDPOINT) {
  //  return $resource(ENDPOINT + 'api/open/game/:category', {}, {
  //    'all': {
  //      method: 'GET',
  //      isArray: true
  //    },
  //    'category': {
  //      method: 'GET',
  //      category: '@category',
  //      isArray: true
  //    }
  //  });
  //});



  .factory('Games', function (SiteData, $q) {
    return {

      getAll: function () {
        var deferred = $q.defer();
        SiteData.load().then(function (siteData) {
          deferred.resolve(siteData.games);
        });
        return deferred.promise;
      },

      getByCategory: function (categoryName) {
        var deferred = $q.defer();
        SiteData.load().then(function (siteData) {
          var gamesFiltered = _.filter(siteData.games, function (game) {
            return game.categories && game.categories.indexOf(categoryName) > -1;
          });
          deferred.resolve(gamesFiltered);
        });
        return deferred.promise;
      },

      getByProvider: function (providerName) {
        var deferred = $q.defer();
        SiteData.load().then(function (siteData) {
          var gamesFiltered = _.filter(siteData.games, function (game) {
            return game.providerName === providerName;
          });
          deferred.resolve(gamesFiltered);
        });
        return deferred.promise;
      }
    };
  });
