'use strict';

angular.module('oshi2App')
  .factory('Categories', function (SiteData, Games, $q) {
    return {

      getAll: function () {
        var deferred = $q.defer();
        SiteData.load().then(function (siteData) {
          deferred.resolve(siteData.categories);
        });
        return deferred.promise;
      },

      getAllWithGames: function() {
        var deferred = $q.defer();

        SiteData.load().then(function (siteData) {
          _.each(siteData.categories, function(category) {
            Games.getByCategory(category.name).then(function(games) {
              category.games = games;
            });
          });
          deferred.resolve(deferred.resolve(siteData.categories));
        });
        return deferred.promise;
      }

    };
  });
